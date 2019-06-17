<template>
  <div class="d-flex justify-content-start align-items-start mx-auto">
    <img src="../../assets/img/alimentos.gif" height="auto" width="200px" v-if="color === 'alimentos'"/>
    <img src="../../assets/img/cosmeticos.gif" height="auto" width="200px" v-else-if="color === 'cosmeticos'"/>
    <img src="../../assets/img/medico.gif" height="auto" width="200px" v-else-if="color === 'medico'"/>
    <img src="../../assets/img/docabinario.gif" height="auto" width="200px" v-else/>
  </div>
</template>

<script>
  export default {
    name: "Gif",
    props: {
      gifName: {
        type: String,
        default: 'gen'
      }
    },
    computed: {
      color () {
        let color = 'docabinario'
        switch (this.gifName) {
          case 'cos':
            color = 'cosmeticos'
            break
          case 'med':
            color = 'medico'
            break
          case 'ali':
            color = 'alimentos'
            break
        }
        return color
      }
    }
  }
</script>