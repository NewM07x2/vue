// import store from '@/store'
import URL from '@/constants/url'

// Ajax通信ライブラリ
import axios from '@/api/axios'
import Vue from 'vue'
Vue.prototype.$api = axios

class SampleApi {
  // getAllCompanyName () {
  //   return axios.post(CONST.RO_DOMAIN + CONST.COMPANY_INFORMATION + '/select-all-company-name')
  // }

  // getBulkRegistrationUploadHistory () {
  //   return axios.post(CONST.BULK_REGISTRATION_UPLOAD_HISTORY)
  // }

  // getSample (requestParams, headers) {
  //   return axios.post(CONST.RO_BULK_REGISTRATION, requestParams, headers)
  // }
  getSample () {
    return axios.post(URL.GET_SAMPLE, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      }
    })
  }
}

export default new SampleApi()
