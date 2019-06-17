<template>
  <div class="upload d-flex align-items-start mt-6">
    <div class="colorgreen">
      <i class="fas fa-layer-group"></i>
    </div>
    <div class="pl-6">
      <h3 class="colorgreen">Transacción de IPFS a Blockchain</h3>
      <p> El hash del documento es transferido de <a href="https://ipfs.io/" target="_blank">IPFS</a> a nodos de la red de
      Blockchain, a través de este Kit.</p>
      <h4 class="colorgreen">Hash de La transacción:</h4>
      <textarea readonly class="colorgreen" id="etheHash" @click="redirect()">{{this.hash.tx.substring(0,2) === '0x' || hash.tx === 'procesando...' || hash.tx === null ? hash.tx : `El archivo "${hash.tx}" ya fue subido previamente`}}</textarea>
      <p class="mb-5 pb-5">Haga clic en el hash para ir a Ropsten en donde podrá verificar que la transacción se ha realizado.</p>
      <p></p>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "UploadBlockchain",
  computed: {
    ...mapState({
      hash: state => state.Toolkit.hash
    })
  },
  methods: {
    redirect() {
      if(this.hash.tx.substring(0,2) === '0x')
        window.open(`https://ropsten.etherscan.io/tx/${this.hash.tx}`, '_blank');
    }
  }
}
</script>
