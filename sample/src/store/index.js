import Vuex from 'vuex'
import CONST from '@/constants'
import api from '@/api'
import _ from 'lodash'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dangerAlerts: [],
    warningAlerts: [],
    infoAlerts: [],
    successAlerts: [],
    isLoading: false,
    iszUrl: '',
  },
  actions: {
    [CONST.UPDATE_DANGER_ALERTS] ({ commit }, params) {
      commit(CONST.UPDATE_DANGER_ALERTS, params)
    },
    [CONST.UPDATE_WARNING_ALERTS] ({ commit }, params) {
      commit(CONST.UPDATE_WARNING_ALERTS, params)
    },
    [CONST.UPDATE_INFO_ALERTS] ({ commit }, params) {
      commit(CONST.UPDATE_INFO_ALERTS, params)
    },
    [CONST.UPDATE_SUCCESS_ALERTS] ({ commit }, params) {
      commit(CONST.UPDATE_SUCCESS_ALERTS, params)
    },
    [CONST.DELETE_DANGER_ALERTS] ({ commit }) {
      commit(CONST.DELETE_DANGER_ALERTS)
    },
    [CONST.DELETE_WARNING_ALERTS] ({ commit }) {
      commit(CONST.DELETE_WARNING_ALERTS)
    },
    [CONST.DELETE_INFO_ALERTS] ({ commit }) {
      commit(CONST.DELETE_INFO_ALERTS)
    },
    [CONST.DELETE_SUCCESS_ALERTS] ({ commit }) {
      commit(CONST.DELETE_SUCCESS_ALERTS)
    },
    [CONST.LOADING] ({ commit }, params) {
      commit(CONST.LOADING, params)
    },
    [CONST.GET_USER] ({ commit }, params) {
      commit(CONST.GET_USER, params)
    },
    [CONST.DELETE_USER] ({ commit }) {
      commit(CONST.DELETE_USER)
    },
    [CONST.NOT_INNER_U_DANGER_ALERTS] ({ commit }, params) {
      commit(CONST.NOT_INNER_U_DANGER_ALERTS, params)
    },
    [CONST.GET_PROJECTS] ({ commit }, params) {
      return new Promise((resolve, reject) => {
        api.getProjects()
          .then((response) => {
            commit(CONST.GET_PROJECTS, response)
            resolve()
          })
          .catch(() => {
            reject(new Error(''))
          })
      })
    },
    [CONST.GET_AREAS] ({ commit }, params) {
      return new Promise((resolve, reject) => {
        api.getAreas()
          .then((response) => {
            commit(CONST.GET_AREAS, response)
            resolve()
          })
          .catch(() => {
            reject(new Error(''))
          })
      })
    },
    [CONST.GET_PREFS] ({ commit }, params) {
      return new Promise((resolve, reject) => {
        api.getPrefectures()
          .then((response) => {
            commit(CONST.GET_PREFS, response)
            resolve()
          })
          .catch(() => {
            reject(new Error(''))
          })
      })
    },
    [CONST.GET_FREQS] ({ commit }, params) {
      return new Promise((resolve, reject) => {
        api.getFrequencies()
          .then((response) => {
            commit(CONST.GET_FREQS, response)
            resolve()
          })
          .catch(() => {
            reject(new Error(''))
          })
      })
    },
    [CONST.GET_COEFS] ({ commit }, params) {
      return new Promise((resolve, reject) => {
        api.getCoefficients()
          .then((response) => {
            commit(CONST.GET_COEFS, response)
            resolve()
          })
          .catch(() => {
            reject(new Error(''))
          })
      })
    },
    [CONST.GET_CONCS] ({ commit }, params) {
      return new Promise((resolve, reject) => {
        api.getConcretes()
          .then((response) => {
            commit(CONST.GET_CONCS, response)
            resolve()
          })
          .catch(() => {
            reject(new Error(''))
          })
      })
    },
    [CONST.GET_EQ_LINKS] ({ commit }, params) {
      return new Promise((resolve, reject) => {
        api.getEquipLinks()
          .then((response) => {
            commit(CONST.GET_EQ_LINKS, response)
            resolve()
          })
          .catch(() => {
            reject(new Error(''))
          })
      })
    },
    [CONST.GET_FEEDERS] ({ commit }, params) {
      return new Promise((resolve, reject) => {
        api.getFeeders()
          .then((response) => {
            commit(CONST.GET_FEEDERS, response)
            resolve()
          })
          .catch(() => {
            reject(new Error(''))
          })
      })
    },
    [CONST.GET_MATERIALS] ({ commit }) {
      return new Promise((resolve, reject) => {
        api.getMaterials()
          .then((response) => {
            commit(CONST.GET_MATERIALS, response)
            resolve()
          })
          .catch(() => {
            reject(new Error(''))
          })
      })
    },
    [CONST.GET_CAP_MEASUREMENTS] ({ commit }, params) {
      return new Promise((resolve, reject) => {
        api.getCapMeasurements({tip: params.tip})
          .then((response) => {
            commit(CONST.GET_CAP_MEASUREMENTS, response)
            resolve()
          })
          .catch(() => {
            reject(new Error(''))
          })
      })
    },
    [CONST.GET_GR_ROUGHS] ({ commit }, params) {
      return new Promise((resolve, reject) => {
        api.getGroundRoughs()
          .then((response) => {
            commit(CONST.GET_GR_ROUGHS, response)
            resolve()
          })
          .catch(() => {
            reject(new Error(''))
          })
      })
    },
    [CONST.GET_RET_WIRES] ({ commit }, params) {
      return new Promise((resolve, reject) => {
        api.getRetractWires()
          .then((response) => {
            commit(CONST.GET_RET_WIRES, response)
            resolve()
          })
          .catch(() => {
            reject(new Error(''))
          })
      })
    },
    [CONST.GET_SAFE_RATIOS] ({ commit }, params) {
      return new Promise((resolve, reject) => {
        api.getSafetyRatios()
          .then((response) => {
            commit(CONST.GET_SAFE_RATIOS, response)
            resolve()
          })
          .catch(() => {
            reject(new Error(''))
          })
      })
    },
    [CONST.GET_EQUIP_MODELS] ({ commit }, params) {
      return new Promise((resolve, reject) => {
        api.getEquipModels({ equipKinds: params.equipKinds, filteringKinds: params.filteringKinds })
          .then((response) => {
            commit(CONST.GET_EQUIP_MODELS, response)
            resolve()
          })
          .catch(() => {
            reject(new Error(''))
          })
      })
    },
    [CONST.GET_DEVICE_MAKERS] ({ commit }, params) {
      return new Promise((resolve, reject) => {
        api.getDeviceMakers()
          .then((response) => {
            commit(CONST.GET_DEVICE_MAKERS, response)
            resolve()
          })
          .catch(() => {
            reject(new Error(''))
          })
      })
    },
    [CONST.GET_ISZ_URL] ({ commit }, params) {
      return new Promise((resolve, reject) => {
        api.getIszUrl()
          .then((response) => {
            commit(CONST.GET_ISZ_URL, response)
            resolve()
          })
          .catch(() => {
            reject(new Error(''))
          })
      })
    },
    [CONST.GET_HARDWARES] ({ commit }, params) {
      return new Promise((resolve, reject) => {
        api.getHardwares()
          .then((response) => {
            commit(CONST.GET_HARDWARES, response)
            resolve()
          })
          .catch(() => {
            reject(new Error(''))
          })
      })
    }
  },
  mutations: {
    [CONST.UPDATE_DANGER_ALERTS] (state, params) {
      state.dangerAlerts.push(...params)
      state.dangerAlerts = _.uniq(state.dangerAlerts)
    },
    [CONST.UPDATE_WARNING_ALERTS] (state, params) {
      state.warningAlerts.push(...params)
      state.warningAlerts = _.uniq(state.warningAlerts)
    },
    [CONST.UPDATE_INFO_ALERTS] (state, params) {
      state.infoAlerts.push(...params)
      state.infoAlerts = _.uniq(state.infoAlerts)
    },
    [CONST.UPDATE_SUCCESS_ALERTS] (state, params) {
      state.successAlerts.push(...params)
      state.successAlerts = _.uniq(state.successAlerts)
    },
    [CONST.DELETE_DANGER_ALERTS] (state) {
      state.dangerAlerts = []
    },
    [CONST.DELETE_WARNING_ALERTS] (state) {
      state.warningAlerts = []
    },
    [CONST.DELETE_INFO_ALERTS] (state) {
      state.infoAlerts = []
    },
    [CONST.DELETE_SUCCESS_ALERTS] (state) {
      state.successAlerts = []
    },
    [CONST.LOADING] (state, params) {
      state.isLoading = params
    },
    [CONST.NOT_INNER_U_DANGER_ALERTS] (state, params) {
      state.dangerAlerts.push(...params)
      state.dangerAlerts = _.uniq(state.dangerAlerts)
    },
  },
  getters: {
    getCapMeasurementById: (state) => (capMeasurementId) => {
      return state.capMeasurements.find(cm => cm.capMeasurementId === capMeasurementId) || {}
    },
    getMaterialById: (state) => (materialId) => {
      return state.materials.find(n => n.materialId === materialId) || {}
    },
    getGroundRoughByCls: (state) => (groundRoughCls) => {
      return state.groundRoughs.find(g => g.groundRoughCls === groundRoughCls) || {}
    }
  }
})
