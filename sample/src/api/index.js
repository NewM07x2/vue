import store from '@/store'
import CONST from '@/constants'

// Ajax通信ライブラリ
import axios from 'common-cli/src/axios'
import Vue from 'vue'
Vue.prototype.$api = axios

class ConstructionApi {
  getUserInfo () {
    return axios
      .post(CONST.GL_DOMAIN + '/common-header/get-user-info')
      .then(this._showAlerts)
  }

  getNoticeList () {
    return axios
      .post(CONST.GL_DOMAIN + '/common-header/get-notice-list')
      .then(this._showAlerts)
  }

  getNoticeDetail (params) {
    return axios
      .post(CONST.GL_DOMAIN + '/common-header/get-notice-detail', params)
      .then(this._showAlerts)
  }

  getPowerCapacity (params) {
    return axios
      .post(CONST.CI_DOMAIN + '/power-capacity/get-power-capacity', params)
      .then(this._showAlerts)
  }

  searchSites (params) {
    return axios
      .post(CONST.CI_DOMAIN + '/specification/search-spec', params)
      .then(this._showAlerts)
  }

  searchInstant (params) {
    return axios
      .post(CONST.CI_DOMAIN + '/instant-comp/search', params)
      .then(this._showAlerts)
  }

  getInstantUserInfo () {
    return axios.get(CONST.CI_DOMAIN + '/user-info/get').then(this._showAlerts)
  }

  getSpec (params) {
    return axios
      .post(CONST.CI_DOMAIN + '/specification/get-spec', params)
      .then(this._showAlerts)
  }
  searchHisSpec (params) {
    return axios
      .post(CONST.CI_DOMAIN + '/specification/search-his-spec', params)
      .then(this._showAlerts)
  }
  getRectifiers () {
    return axios
      .post(CONST.CI_DOMAIN + '/master/get-rectifiers')
      .then(this._showAlerts)
  }

  getRadios () {
    return axios
      .post(CONST.CI_DOMAIN + '/master/get-radios')
      .then(this._showAlerts)
  }

  getProjects () {
    return axios
      .post(CONST.CI_DOMAIN + '/master/get-projects')
      .then(this._showAlerts)
  }

  getAreas () {
    return axios
      .post(CONST.CI_DOMAIN + '/master/get-areas')
      .then(this._showAlerts)
  }

  getPrefectures () {
    return axios
      .post(CONST.CI_DOMAIN + '/master/get-prefectures')
      .then(this._showAlerts)
  }

  getEquipLinks () {
    return axios
      .post(CONST.CI_DOMAIN + '/master/get-equip-links')
      .then(this._showAlerts)
  }

  getFrequencies () {
    return axios
      .post(CONST.CI_DOMAIN + '/master/get-frequencies')
      .then(this._showAlerts)
  }

  getCoefficients () {
    return axios
      .post(CONST.CI_DOMAIN + '/master/get-coefficients')
      .then(this._showAlerts)
  }

  getConcretes () {
    return axios
      .post(CONST.CI_DOMAIN + '/master/get-concretes')
      .then(this._showAlerts)
  }

  getFeeders () {
    return axios
      .post(CONST.CI_DOMAIN + '/master/get-feeders')
      .then(this._showAlerts)
  }

  getMaterials () {
    return axios
      .post(CONST.CI_DOMAIN + '/master/get-materials')
      .then(this._showAlerts)
  }

  getCapMeasurements (param) {
    return axios
      .post(CONST.CI_DOMAIN + '/master/get-cap-measurements', param)
      .then(this._showAlerts)
  }

  getGroundRoughs () {
    return axios
      .post(CONST.CI_DOMAIN + '/master/get-ground-roughs')
      .then(this._showAlerts)
  }
  getRetractWires () {
    return axios
      .post(CONST.CI_DOMAIN + '/master/get-retract-wires')
      .then(this._showAlerts)
  }

  getSafetyRatios () {
    return axios
      .post(CONST.CI_DOMAIN + '/master/get-safety-ratios')
      .then(this._showAlerts)
  }
  getDeviceMakers () {
    return axios
      .post(CONST.CI_DOMAIN + '/master/get-device-makers')
      .then(this._showAlerts)
  }

  getAddresses (prefCd) {
    return axios
      .post(CONST.CI_DOMAIN + '/address/get-addresses', { prefCd })
      .then(this._showAlerts)
  }

  getBaseWinds (params) {
    return axios
      .post(CONST.CI_DOMAIN + '/base-winds/get-base-winds', params)
      .then(this._showAlerts)
  }

  getVendors () {
    return axios
      .post(CONST.CI_DOMAIN + '/master/get-vendors')
      .then(this._showAlerts)
  }

  getMenuInfo () {
    // もとは工程で使っていたものなので、現状不要
    return null
  }

  getEquipElements (params) {
    return axios
      .post(CONST.CI_DOMAIN + '/master/get-equip-elements', params)
      .then(this._showAlerts)
  }

  getCalcPtns (params) {
    return axios
      .post(CONST.CI_DOMAIN + '/master/get-calc-ptns', params)
      .then(this._showAlerts)
  }

  upsertPowerCapacity (params) {
    return axios
      .post(CONST.CI_DOMAIN + '/power-capacity/upsert-power-capacity', params)
      .then(this._showAlerts)
  }

  deletePowerCapacity (params) {
    return axios
      .post(CONST.CI_DOMAIN + '/power-capacity/delete-power-capacity', params)
      .then(this._showAlerts)
  }

  calcPowerCapacity (params) {
    return axios
      .post(CONST.CI_DOMAIN + '/power-capacity/calc-power-capacity', params)
      .then(this._showAlerts)
  }

  getLastPowerCapacity (params) {
    return axios
      .post(CONST.CI_DOMAIN + '/power-capacity/get-last-power-capacity', params)
      .then(this._showAlerts)
  }

  getStrengthComputation (specId) {
    return axios
      .post(
        CONST.CI_DOMAIN + '/strength-computation/get-strength-computation',
        { specId }
      )
      .then(this._showAlerts)
  }

  getLastStrengthComputation (specId) {
    return axios
      .post(
        CONST.CI_DOMAIN + '/strength-computation/get-last-strength-computation',
        { specId }
      )
      .then(this._showAlerts)
  }

  upsertStrengthComputation (params) {
    return axios
      .post(
        CONST.CI_DOMAIN + '/strength-computation/upsert-strength-computation',
        params
      )
      .then(this._showAlerts)
  }

  deleteStrengthComputation (params) {
    return axios
      .post(
        CONST.CI_DOMAIN + '/strength-computation/delete-strength-computation',
        params
      )
      .then(this._showAlerts)
  }

  calcStrengthComputation (params) {
    return axios
      .post(
        CONST.CI_DOMAIN + '/strength-computation/calc-strength-computation',
        params
      )
      .then(this._showAlerts)
  }

  sendConfirmDate (params) {
    return axios
      .post(CONST.CI_DOMAIN + '/strength-computation/send-confirm-date', params)
      .then(this._showAlerts)
  }

  getLocalInvestigation (specId) {
    return axios
      .post(CONST.CI_DOMAIN + '/strength-computation/get-local-investigation', specId)
      .then(this._showAlerts)
  }

  getIszUrl (params) {
    return axios
      .post(CONST.CI_DOMAIN + '/master/get-isz-url', params)
      .then(this._showAlerts)
  }

  hasAuthority (specId) {
    return axios
      .post(CONST.CI_DOMAIN + '/auth/auth', { specId })
      .then(this._showAlerts)
  }

  getEquips (params) {
    return axios
      .post(CONST.CI_DOMAIN + '/equips/get-equips', params)
      .then(this._showAlerts)
  }

  getEquipSpec (params) {
    return axios
      .post(CONST.CI_DOMAIN + '/equips/get-equip-spec', params)
      .then(this._showAlerts)
  }

  getEquipModels (params) {
    return axios
      .post(CONST.CI_DOMAIN + '/equips/get-equip-models', params)
      .then(this._showAlerts)
  }

  createThread (params) {
    return axios.post(CONST.GL_DOMAIN + '/message-board/thread-regist', params)
  }

  getHardwares (params) {
    return axios
      .post(CONST.CI_DOMAIN + '/master/get-hardwares', params)
      .then(this._showAlerts)
  }
  searchUser (paramData) {
    return axios
      .post(CONST.SE_DOMAIN + '/spec-edit/search-users', paramData)
      .then(this._showAlerts)
  }
  getCurrentUser () {
    return axios
      .post(CONST.GL_DOMAIN + '/ui-common-header/get-user-info')
      .then(this._showAlerts)
  }
  getComputationInfo (params) {
    return axios
      .post(CONST.CI_DOMAIN + '/equipment-list/get-equipment-list', params)
      .then(this._showAlerts)
  }

  getConcreteDBBulkDownloadHistory () {
    return axios
      .post(CONST.CI_DOMAIN + '/concrete-db-bulk-download/get-bulk-download-history')
      .then(this._showAlerts)
  }

  requestBulkDownloadConcreteDb (params) {
    return axios
      .post(CONST.CI_DOMAIN + '/concrete-db-bulk-download/request', params)
      .then(this._showAlerts)
  }
  getBulkDownloadConcreteDbJson (params) {
    return axios
      .post(CONST.CI_DOMAIN + '/concrete-db-bulk-download/get-json', params)
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

export default new ConstructionApi()
