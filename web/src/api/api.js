import store from '@/store'
import CONST from '@/constants'

// Ajax通信ライブラリ
import axios from 'common-cli/src/axios'
import Vue from 'vue'
Vue.prototype.$api = axios

class Api {
  getUserInfo () {
    return axios
      .post(CONST.GL_DOMAIN + '/common-header/get-user-info')
      .then(this._showAlerts)
  }
  _showAlerts (res) {
    if (!res || !res.data || !res.data.messages) {
      return res
    }
    const successAlerts = []
    const infoAlerts = []
    const warningAlerts = []
    const dangerAlerts = []
    res.data.messages.forEach(m => {
      if (m.type === 'success') successAlerts.push(m.message)
      if (m.type === 'info') infoAlerts.push(m.message)
      if (m.type === 'warning') warningAlerts.push(m.message)
      if (m.type === 'danger') dangerAlerts.push(m.message)
    })
    store.dispatch(CONST.UPDATE_DANGER_ALERTS, dangerAlerts)
    store.dispatch(CONST.UPDATE_WARNING_ALERTS, warningAlerts)
    store.dispatch(CONST.UPDATE_INFO_ALERTS, infoAlerts)
    store.dispatch(CONST.UPDATE_SUCCESS_ALERTS, successAlerts)
    return res
  }
}

export default new Api();
