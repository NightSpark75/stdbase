import axios from 'axios'
import config from '../../config'

export function apps(success, error) {
  axios.get(config.url + '/sys/apps/list')
  .then((res) => {
    success(res)
  }).catch((err) => {
    error(err)
  })
}