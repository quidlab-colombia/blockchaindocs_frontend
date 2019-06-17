<template>
  <div id="hash" class="hash">
    <div class="hashbig d-flex flex-column align-items-center m-0 p-0">
      <p class="font-weight-bold m-0 p-0">HASH DEL DOCUMENTO<span class="d-flex justify-content-center linebottom pt-2"></span></p>
      <div @click="doCopy" data-toggle="tooltip" data-placement="top" title="Clic para copiar hash (Necesario al
      querer descargar un documento)" class="coloryellow m-0 pt-2" id="verifiedHash">
        {{ validate.hash }}
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "Hash",
    computed:{
      ...mapState({
        validate: state => state.Toolkit.validate
      })
    },
    methods:{
      doCopy() {
        this.$copyText(this.validate.hash).then( (e) => {
          alert(`Se ha copiado: ${this.validate.hash}`)
        })
      }
    }
  }
</script>