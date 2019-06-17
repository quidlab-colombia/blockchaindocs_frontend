<template>
  <div>
    <div>
      <p>
        Haga clic derecho sobre el PFD y seleccione "Guardar como" para descargar el documento:
      </p>
    </div>
    <object class="d-flex embed-responsive embed-responsive-1by1 pdf" type="application/pdf" :data="document"
    v-if="document && document.toString().match(/application\/pdf/g)">
      <p>Insert your error message here, if the PDF cannot be displayed.</p>
    </object>
    <img :src="document" alt="" class="d-flex embed-responsive embed-responsive-1by1 img-fluid">
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "PreviewFile",
    data() {
      return {
        reader: new FileReader(),
        document: null
      }
    },
    computed: {
      ...mapState({
        file: state => state.Toolkit.file
      })
    },
    watch: {
      file(e) {
        if (e) {
          this.reader.readAsDataURL(e)
        }
      }
    },
    created() {
      this.reader.addEventListener('load', () => {
        this.document = this.reader.result
      })
    }
  }

</script>