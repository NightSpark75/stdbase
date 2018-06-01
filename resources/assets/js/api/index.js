import axios from 'axios'
import { checkToken, removeUser } from '../lib'
import { refreshToken } from './login'

axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage['jwt-token']

// 请求拦截
axios.interceptors.request.use(function (config) {
  // 处理请求之前的配置
  console.log('request before')
  if (! checkToken) {
    refreshToken()
  }
  return config;
}, function (error) {
  // 请求失败的处理
  console.log('request error')
  return Promise.reject(error);
});

// 响应拦截
axios.interceptors.response.use(function (response) {
  // 处理响应数据
  console.log('response handle')
  return response;
}, function (error) {
  // 处理响应失败
  console.log('response error')

  const res = error.response
  if (res.status === 401 && res.data.message === 'User not found') {
    relogin('帳號認證有誤，請重新登入...')
  }
  if (res.state = 401 && res.data.message === 'Token has expired') {
    relogin('帳號認證有誤，請重新登入...')
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