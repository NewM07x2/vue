import Vuex from 'vuex'
import Vue from 'vue'
// import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  // state:管理するデータ項目の定義
  state: {
    count: 0
  },
  // mutations の操作を各コンポーネントから呼び出すために使用する関数（非同期処理を定義可）
  actions: {},
  // state のデータを直接操作するための関数（非同期処理は定義不可）
  mutations: {
  },
  // state 内のデータの状態から算出される値（≒算出プロパティ）
  getters: {
  }
})
