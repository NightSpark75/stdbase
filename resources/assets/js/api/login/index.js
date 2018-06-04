import axios from 'axios'
import config from '../../config'
import { saveUser, removeUser } from '../../lib'

export function login(account, password, success, error) {
  console.log('login')
  let formData = new FormData()
  formData.append('account', account)
  formData.append('password', password)
  axios.post(config.url + '/auth/login', formData)
    .then((res) => {
      success(res)
    }).catch((err) => {
      error(err)
    })
}

export function refreshToken() {
  axios.post(config.url + '/auth/refresh')
    .then((res) => {
      let token = res.data.token
      let user = res.data.user
      saveUser(token, user)
    }).catch((err) => {
      removeUser()
      //alert('帳號證認已過期或失效，請重新登入...')
      window.location = '/'
    })
}