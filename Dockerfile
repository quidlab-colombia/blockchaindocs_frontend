FROM nginx

EXPOSE 80
EXPOSE 443

COPY ./dist/ /usr/share/nginx/html

COPY entrypoint.sh /

CMD ["sh", "/entrypoint.sh"]
