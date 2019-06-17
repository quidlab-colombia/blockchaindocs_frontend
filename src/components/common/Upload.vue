<template>
  <div class="upload d-flex align-items-start">
    <div class="coloryellow">
      <i class="fas fa-file-alt"></i>
    </div>
    <div class="pl-6">
      <h3 class="coloryellow"> Documento subido en nodos de IPFS </h3>
      <p>El documento es almacenado y distribuido a través de <a href="https://ipfs.io/" target="_blank">IPFS</a>,
        un <a href="https://es.wikipedia.org/wiki/Protocolo_de_internet" target="_blank">protocolo</a> (http es también un protocolo), que utiliza múltiples nodos para almacenar la información de forma descentralizada.</p>
      <h4 class="coloryellow">Hash del documento:</h4>
      <p class="coloryellow pb-4 font-weight-bold"><i class="fas fa-exclamation-triangle"></i> Haga clic en el Hash para copiarlo y guárdelo. Necesitará este hash más adelante para verificar y descargar.</p>
      <textarea data-toggle="tooltip" data-placement="top" title="Clic para copiar hash (Necesario al querer descargar un documento)" readonly class="coloryellow" id="ipfsHash" @click="doCopy">{{ hash.hash }}</textarea>
      <p>Al cargar el archivo, <a href="https://ipfs.io/" target="_blank">IPFS</a> devuelve al usuario el resumen
        matemático del documento o un “Hash”. El hash
        será visible para todos en la red pero es imposible deducir su contenido sólo leyéndolo.</p>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'Dashboard',
    computed: {
      ...mapState({
        hash: state => state.Toolkit.hash,
        error: state => state.Toolkit.error
      })
    },
    methods: {
      doCopy() {
        if (this.error.code === 409) {
          this.$copyText(this.error.detailed.split(' ').pop()).then((e) => {
            alert(`Se ha copiado: ${this.error.detailed.split(' ').pop()}`)
          })
        } else {
          if(this.hash.hash !== 'procesando...') {
            this.$copyText(this.hash.hash).then((e) => {
              alert(`Se ha copiado: ${this.hash.hash}`)
            })
          }
        }
      }
    },

  }
</script>