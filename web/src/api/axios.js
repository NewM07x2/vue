import Axios from 'axios'

Axios.defaults.headers.common['X-User-Agent'] = (() => { return '[rewrite]'.concat(navigator.userAgent, (/.*(iPad|Macintosh).*/.test(navigator.userAgent) && 'ontouchend' in document ? '[iPad]' : '[]')) })()

const api = Axios.create({
  xsrfHeaderName: 'X-CSRF-Token',
  withCredentials: true
})

api.interceptors.request.use((config) => {
  config.headers.post['ajaxCall'] = true
  return config
})

api.interceptors.response.use(function (response) {
  if (response.data.messages && response.data.messages !== null) {
    if (response.data.messages.length !== 0 && response.data.messages[0].code === 'E_CM9500') {
      redirect(process.env.ERROR_500, 'ERROR_500')
      return
    }
    if (response.data.messages.length !== 0 && response.data.messages[0].code === 'W_CM9403') {
      console.log('認可エラーです')
      redirect(process.env.ERROR_403, 'ERROR_403')
      return
    }
  }
  if (response.data['redirectUrl'] && response.data['redirectUrl'] !== null) {
    location.href = response.data['redirectUrl']
  } else if (response.data.responseBody && response.data.responseBody !== null) {
    if (response.data.responseBody['redirectUrl'] && response.data.responseBody['redirectUrl'] !== null) {
      if (!response.data.responseBody['dispType'] || response.data.responseBody['dispType'] === null ||
          response.data.responseBody['dispType'] === '01') {
        location.href = response.data.responseBody['redirectUrl']
      } else {
        window.open(response.data.responseBody['redirectUrl'], '_blank')
      }
    }
  }
  return response
}, function (err) {
  if (typeof err === 'undefined' || typeof err.response === 'undefined') {
    redirect(process.env.ERROR_500, 'ERROR_500')
    return Promise.reject(err)
  }

  if (err.response.status === 401) {
    console.log('認可エラーです')
    redirect(process.env.ERROR_401, 'ERROR_401')
    return Promise.reject(err)
  } else if (err.response.status === 403) {
    console.log('認可エラーです')
    redirect(process.env.ERROR_403, 'ERROR_403')
    return Promise.reject(err)
  } else if (err.response.status === 500) {
    redirect(process.env.ERROR_500, 'ERROR_500')
    return Promise.reject(err)
  }
})

function redirect (param, paramName) {
  if (typeof param !== 'undefined' && param !== '') {
    location.href = param
  } else {
    console.log('定義が存在しないため、遷移を行いませんでした。定義:' + paramName)
  }
}

export default api
