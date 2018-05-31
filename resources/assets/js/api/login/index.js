import axios from 'axios'
import config from '../../config'

export function login(account, password, success, error) {
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