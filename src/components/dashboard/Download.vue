<template>
  <div class="download">
    <div class="modal" id="downloadModal" tabindex="-1" role="dialog" aria-labelledby="downloadModal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <p class="textcenter">Escriba el HASH del documento que desea descargar</p>
            <input type="text" class="box-download" placeholder="Hash del documento, ejemplo: QmWetq33nkz3NLDdnwEBczfNoJTex7rBYAyWR4o26LVRCg" v-model="hash">
            <div class="d-flex justify-content-center pt-5">
              <button type="button" class="btnpink" @click="getFile" data-dismiss="modal"> Descargar
                <i class="iconbutton mt-4 pt-2 pl-3 pr-2 icon-download"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import * as constants from '@/store/constants'

  export default {
    name: "Download",
    data(){
      return {
        hash: null
      }
    },
    methods: {
      ...mapActions({
        document: constants.TOOLKIT_DOWNLOAD_FILE
      }),
      getFile(e){
        this.$emit('to-download', e)
        this.document(this.hash)
      }
    }
  }
</script>
