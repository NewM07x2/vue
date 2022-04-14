import Vue from 'vue'
import App from './App'
import router from './router'
import _ from 'lodash'

// Ajax通信ライブラリ
import axios from '@/api/axios'

// 定数定義ファイル
import constants from './constants/index.js'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'

// 共通コンポーネント
// import CommonLoading from '@/components/common/CommonLoading'
// import messageBar from '@/components/common/MessageBar'

// vue-multiselect
import Multiselect from 'vue-multiselect'

Vue.use(BootstrapVue)
Vue.component('multiselect', Multiselect)
// Vue.component('common-loading', CommonLoading)
// Vue.component('message-bar', messageBar)

Vue.config.productionTip = false

Vue.prototype.$api = axios
Vue.prototype.$const = constants
Vue.prototype.$_ = _

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
