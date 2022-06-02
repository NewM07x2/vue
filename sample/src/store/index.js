import Vuex from 'vuex'
// import CONST from '@/constants'
// import _ from 'lodash'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  // state:コンポーネントでいうdata
  state: {
    count: 0,
    message_state: '初期表示(state経由)',
    message_getter: '初期表示2(getter経由)'
  },

  actions: {
    increment: ({ commit }) => {
      setTimeout(() => { commit('increment') }, 2000)
    },
    decrement: ({ commit }) => {
      setTimeout(() => { commit('decrement') }, 2000)
    }
  },

  // mutations:コンポーネントでいうmethod（と言うかsetter）
  // stateを唯一変更できるもの
  mutations: {
    // vuexでは引数をpayloadと呼ぶっぽい
    // payloadはオブジェクトにするべき（いっぱい入れれるし）
    increment (state) {
      state.count++
    },
    decrement (state) {
      if (state.count > 0) {
        state.count--
      }
    }
  },

  // getters:コンポーネントでいうcomputed的なもの
  getters: {
    // messageを使用するgetter
    messageGetter (state) {
      return state.message_getter
    },
    count (state) {
      return state.count
    }
  }
})
