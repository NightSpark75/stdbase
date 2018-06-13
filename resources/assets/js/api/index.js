import axios from 'axios'
import config from '../config'
import { checkToken, removeUser, tokenExpired } from '../lib'
import { refreshToken } from './login'

axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage['jwt-token']
axios.interceptors.request.use(function (request) {
  console.log('request: ' + request.url)
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
  return response;
}, function (error) {
  console.log('response error')
  console.log(error)
  const request = error.request
  if (request) {
    if (request.url !== config.url + 'auth/refresh' && window.localStorage['token-error'] !== 'Y') {
      if (request.status === 401 && (requset.data.message === 'User not found' || request.data.message === 'Token has expired')) {
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