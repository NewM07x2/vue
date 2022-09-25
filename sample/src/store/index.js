import Vuex from 'vuex'
// import CONST from '@/constants'
// import _ from 'lodash'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  // state:コンポーネントでいうdata
  state: {
    count: 10,
    message_state: '初期表示(state経由)',
    message_getter: '初期表示2(getter経由)',
    windowObject: null
  },
  // getters:コンポーネントでいうcomputed的なもの
  getters: {
    // messageを使用するgetter
    getMessage (state) {
      return state.message_getter
    },
    getCount (state) {
      return state.count
    },
    windowObject (state) {
      return state.windowObject
    }
  },
  // stateの値を更新する為に使用。
  // 原則として、mutation以外でstateの更新は禁止。
  // また、全て同期的な処理にするものとする。
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
    },
    createWindowObject (state, payload) {
      // 作成されたオブジェクトを代入
      state.windowObject = payload.windowObject
    },
    removeWindowObject (state) {
      // 作成されたオブジェクトを代入
      state.windowObject = null
    }
  },
  // 非同期処理や外部APIとの通信を行い、最終的にmutationを呼び出す為に使われます。
  actions: {
    increment: ({ commit }) => {
      setTimeout(() => { commit('increment') }, 2000)
    },
    decrement: ({ commit }) => {
      setTimeout(() => { commit('decrement') }, 2000)
    }
  }
})
