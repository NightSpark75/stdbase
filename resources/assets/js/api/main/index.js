import axios from 'axios'
import config from '../../config'

export function apps(success, error) {
  const Auth = 'Bearer ' + window.localStorage['jwt-token']
  axios.get(config.url + '/sys/apps/list', { headers: { Authorization: Auth } })
  .then((res) => {
    success(res)
  }).catch((err) => {
    error(err)
  })
}