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
import 'vue-material-design-icons/styles.css'
// 共通コンポーネント
// import CommonLoading from '@/components/common/CommonLoading'
// import messageBar from '@/components/common/MessageBar'

// CSSファイル定義
import './assets/css/common.css'
import './assets/css/styles.css'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { faHeart } from '@fortawesome/free-regular-svg-icons'
// import { faApple } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// vue-multiselect
import Multiselect from 'vue-multiselect'

// 使用するアイコンを指定。全てimportすることも可能だが、要領が増えるため個別でimportするのが妥当。
library.add(faUserSecret)
// library.add(faHeart)
// library.add(faApple)
// ----------------------------------------------------------------------

Vue.use(BootstrapVue)
Vue.component('font-awesome-icon', FontAwesomeIcon)
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
