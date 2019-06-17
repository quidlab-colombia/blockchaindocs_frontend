# ICT Ministry's Digital Innovation Center Blockchain Toolkit Sample Frontend

Welcome to the Blockchain Toolkit Sample Frontend Project. This is the documentation for developers.

As stated in the API project, the Blockchain Toolkit Project also offers this front end to show how to consume the API.

## Starting Up and Deploying

There are two ways to start this project up. The [NPM Method](#npm-method) that must be run alongside with the [API NPM Method](https://github.com/centrodeinnovacion/api#npm-method), shows how to start this project up using NPM; and the [Docker Method](#docker-method), that only requires you to have the API project beside this one. For production deployment, check [Production Method](#production-method).

### NPM Method

Install all the dependencies with NPM:

```bash
npm i
```

Once the dependencies are installed, just run the project.

```bash
npm run serve
```

You can open [http://localhost:8080](http://localhost:8080) on your browser.

In this case, the operations are requested at [http://localhost:10010](http://localhost:10010).

### Docker Method

This project also offers a custom container method. You will see a `Dockerfile`, and a `docker-compose.yml` files.

The `docker-compose.yml` file offers links to the self signed certificates on the `volumes` section.

If you are running the Docker Method, ensure to have an environment variable called `VUE_REMOTE` set to `true` as this `docker-compose.yml` file shows. This will redirect all the requests to the dockerized API, defined on the same file.

This `docker-compose.yml` file also sets an `api` service running on the sibling API project repo. For this to work, ensure that **the api project is not running on any of its methods**. This `docker-compose.yml` file will take care of starting it up.

Prepare the production assets:

```bash
npm run build
```

### Production Method

For your convenience, there is a prepared image at [ViveLab Bogota's Docker Hub Account](https://hub.docker.com/r/vivelabbogota/toolkit-frontend/). Just pick the version that fits better. We highly recommend to use the v1.0.0 as the time this documentation is written.

It's worthy to mention that on production you should use a `.env` file fully dedicated to that environment as shown on the [API Project's Production Method](https://github.com/centrodeinnovacion/api#production-method). You also need to provide valid SSL certificates for the API and Frontend projects to properly work. It is not recommended to use self signed certificates.

Finally, this project runs an Nginx docker image as base of the custom configuration. Thus you must provide a suitable `production.conf` Nginx configuration file to be used instead of the `default.conf` file. This file must ensure to have the upstream, the path to the SSL certificates and also a redirection from http to https (i.e. redirecting all requests done through port 80 to port 443).

Prepare the production assets:

```bash
npm run build
```

## API Consumption

This project uses [axios](https://github.com/axios/axios#axios) to fire requests up against the API. As you can see at the [`main.js`](./src/main.js),

```javascript
try {
  remote = $VUE_REMOTE
} catch(e) {
  remote = false
}

Vue.axios.defaults.baseURL = remote ? '/api/' : 'http://localhost:10010'
```

the endpoint is chosen depending on how the project was started. For instance, running using the [NPM Method](#npm-method) will choose the `http://localhost:10010` endpoint, whereas running using the [Docker Method](#docker-method) will use the `/api/` endpoint. This endpoint is an alias for the Nginx Upstream shown in the [`default.conf`](./default.conf) file.

```nginx
upstream backend_server {
  server api-toolkit:10443;
}

server {
  listen  80;
  server_name localhost;
  return 301 https://$host$request_uri;
}

server {
  ...

  ssl_certificate /etc/ssl/nginx.crt;
  ssl_certificate_key /etc/ssl/nginx.key;

  ...

  location /api/ {
    proxy_pass https://backend_server/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }

  location / {
    ...
  }
}
```

Then, all the operations requested to the API are done on the `store` section, within the [`toolkit.js`](./src/store/modules/toolkit.js) module.


For instance, the upload file method, only will append the final part of the endpoint, because the base was defined at the [`main.js`](./src/main.js) file.

```javascript
  [constants.TOOLKIT_UPLOAD_FILE]: ({commit}, data) => {
    const formData = new FormData()
    formData.append('file', data)
    Vue.axios.post('/document', formData, {headers: {'Content-Type': `multipart/form-data; boundary=${formData.boundary}`}})
        .then(response => response.data.result )
        .then(hash => {
          commit(constants.TOOLKIT_SET_PROPERTY, {hash})
        })
        .catch(response => {
          const error = {code: response.response.data.code, detailed: response.response.data.detailed}
          commit(constants.TOOLKIT_SET_PROPERTY, {error})
        })

  }
```

In order to know more about how this store pattern works, refer to the [Vuex](https://vuex.vuejs.org/) documentation.

## Disclaimer

We are responsible for neither the use you give to this toolkit nor the deployment on production environments nor the SSL certificates nor the Production Nginx Configuration File.. The software is delivered as it is and you are compelled to use it as shown here.
