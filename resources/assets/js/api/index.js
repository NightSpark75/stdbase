import axios from 'axios'
import config from '../config'
import { checkToken, removeUser, tokenExpired } from '../lib'
import { refreshToken } from './login'

axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage['jwt-token']
axios.interceptors.request.use(function (request) {
  console.log('request: ' + request.url)
  if (request.url !== '/api/auth/refresh' && request.url !== '/api/auth/login' && !window.localStorage['check-token']) {
    window.localStorage['check-token'] = true
    if (tokenExpired()) {
      relogin('帳號認證已過期...')
      return
    }
  }
  return request;
}, function (error) {
  console.log('request error')
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  console.log('response handling')
  return response;
}, function (error) {
  console.log('response error')
  console.log(error)
  const res = error.response
  if (error.request.url !== config.url + 'auth/refresh') {
    if (res.status === 401 && res.data.message === 'User not found') {
      relogin('帳號認證有誤，請重新登入...')
      return Promise.reject(error);
    }
    if (res.state = 401 && res.data.message === 'Token has expired') {
      relogin('帳號認證有誤，請重新登入...')
      return Promise.reject(error);
    }
  }
  return Promise.reject(error);
});

function relogin(message) {
  alert(message)
  removeUser()
  window.location = '/'
}

export * from './login'
export * from './main'
export * from './system'