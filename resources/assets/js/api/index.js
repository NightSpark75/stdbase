import axios from 'axios'
import config from '../config'
import { removeUser, tokenExpired } from '../lib'
import Progress from 'react-progress-2'

axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage['jwt-token']
axios.interceptors.request.use(function (request) {
  console.log('request: ' + request.url)
  if (
    request.url !== '/api/auth/refresh' &&
    request.url !== '/api/auth/login' &&
    request.url !== '/api/sys/menu'
  ) {
    Progress.show()
  }
  
  if (request.url !== '/api/auth/refresh' && request.url !== '/api/auth/login' && window.localStorage['check-token'] !== 'Y') {
    window.localStorage['check-token'] = 'Y'
    if (tokenExpired()) {
      relogin('帳號認證已過期，請重新登入...')
      return null
    }
  }
  return request;
}, function (error) {
  console.log('request error')
  return Promise.reject(error)
});

axios.interceptors.response.use(function (response) {
  console.log('response handling')
  if (
    response.config.url !== '/api/auth/refresh' &&
    response.config.url !== '/api/auth/login' &&
    response.config.url !== '/api/sys/menu'
  ) {
    Progress.hide()
  }
  return response
}, function (error) {
  console.log('response error')
  console.log(error)
  const request = error.request
  const response = error.response
  if (request) {
    console.log(request)
    if (request.url !== config.url + 'auth/refresh' && window.localStorage['token-error'] !== 'Y') {
      if (response.status === 401 && (response.data.message === 'User not found' || response.data.message === 'Token has expired')) {
        window.localStorage['token-error'] = 'Y'
        relogin('帳號認證已過期，請重新登入...')
        return null
      }
    }
  }
  return Promise.reject(error)
});

function relogin(message) {
  alert(message)
  removeUser()
  window.location = '/'
}

export * from './login'
export * from './main'
export * from './system'