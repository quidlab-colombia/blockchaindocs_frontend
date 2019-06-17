import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Toolkit from './modules/toolkit'

export default new Vuex.Store({
  modules: {
    Toolkit
  }
})
