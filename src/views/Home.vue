<template>
  <div class="home d-flex flex-column justify-content-center align-items-center">
    <div class="mt-5 content text-center" data-text="Blockchain">
      <span class="">
        <span class="linetext">Blockchain</span>
      </span>
    </div>
    <div class="justify-content-center d-flex align-items-center flex-column">
      <p class="textcenter text-center pr-5 pl-5 mr-5 ml-5">Esta tecnología puede considerarse como una base de datos
        distribuida entre varios nodos o computadores conectados a una misma red, que utiliza el consenso para validar
        información y transacciones, es decir que la información se maneja de forma descentralizada.
        Este kit le dará herramientas para entender el funcionamiento de la tecnología Blockchain.
        <br>
        <span class="coloryellow"><i class="fas fa-exclamation-triangle"></i> Para navegar correctamente por este sitio es necesario hacerlo desde un
        computador. </span></p>
      <router-link class="btn" :to="{name: 'howitworks'}">
        <span class="buttontext">Empezar</span>
      </router-link>
      <div class="pt-5 mt-2">
        <img src="../assets/img/logo_toolkit2.png"/>
      </div>
    </div>
    <div class="d-flex flex-column container-fluid fixed-bottom2">
      <div class="d-flex flex-wrap">
        <div class="p-2">
          <a href="http://www.co.undp.org/" target="_blank"> <img src="../assets/img/logo_unpd.png"/></a>
          <a href="https://www.un.org/development/desa/en/" target="_blank"><img
                  src="../assets/img/logo_undesa.png"/></a>
        </div>
        <div class="p-2">
          <a href="https://www.mintic.gov.co/portal/604/w3-channel.html" target="_blank"><img
                  src="../assets/img/logo_mintic.png"/></a>
        </div>
        <div class="ml-auto p-2">
          <a href="http://centrodeinnovacion.gobiernoenlinea.gov.co/es" target="_blank"><img
                  src="../assets/img/logo_centrodeinnovacion.png"/></a>
          <span class="linefooterhome"></span>
        </div>
        <div class="p-2">
          <a href="http://vivelabbogota.com/" target="_blank">
            <img src="../assets/img/logo_vivelab.png"/>
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'home'
  }
</script>
