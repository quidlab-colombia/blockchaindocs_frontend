<template>
  <div>
    <div class="global d-flex justify-content-center">
      <canvas id="3DView"></canvas>
    </div>
  </div>
</template>

<script>
  import IPFSmarker from './img/ipfs.png'
  import ETHmarker from './img/ethereum.png'
  import DisabledIPFS from './img/ipfsDisabled.png'

  export default {
    name: 'global',
    data() {
      return {
        options: {
          globeBackColor: '#396A92aa',
          globeFrontColor: '#9AB4CBbb',
          globeLinesColor: '#00000044',
          rotationIdleSpeedFactor: 20.0,
          rotationSpeedFactor: 1.5,
          wave: false,
          width: 590
        },
        globe: null,
        imageIPFS: null,
        imageETH: null,
        disabledIPFS: null
      }
    },
    methods: {
      init() {
        this.imageIPFS = new Image()
        this.imageETH = new Image()
        this.disabledIPFS = new Image()
        this.imageIPFS.src = IPFSmarker
        this.imageETH.src = ETHmarker
        this.disabledIPFS.src = DisabledIPFS
        this.globe = new Globe(document.getElementById("3DView"), this.options)
      }
    },
    mounted() {
      this.init()
    }
  }
</script>
