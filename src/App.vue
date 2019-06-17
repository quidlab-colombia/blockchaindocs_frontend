<template>
  <div id="app" class="container-fluid">
    <router-view/>
      <div class="text-center py-3 footer-copyright falsefooter mx-auto">© 2018.
        <a href="/docs/terms.pdf" target="_blank"> Términos y condiciones de uso.</a>
      </div>
      <footer class="" v-if="route !== 'home' && route !== 'about'">
        <div class="d-flex fixed-bottom mb-2">
          <div class="p-2 ml-5 mr-auto mb-0 pb-0" data-toggle="tooltip" data-placement="top" title="¿Cómo usar este kit?">
            <button type="button"  class="btnStyle p-3" data-toggle="modal" data-target="#tutorialModal" id="Tutorial">
              Video explicativo
            </button>
          </div>
          <div class="p-2 mr-3 mb-3">
            <router-link class="btnDiamond" :to="{name: back}">
              <i class="fas fa-arrow-left"></i>
            </router-link>
          </div>
          <div class="p-2 mr-3 mb-0">
            <router-link class="btnDiamond2" :to="{name: forward}">
              <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </footer>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      route: state => state.route.name,
      back: state => state.route.meta.back,
      forward: state => state.route.meta.forward
    })
  }
}
</script>

<style lang="scss">
@import "assets/styles/styles";
</style>
