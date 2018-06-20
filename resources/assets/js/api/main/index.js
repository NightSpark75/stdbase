import axios from 'axios'
import config from '../../config'

export function getApps(success, error) {
  axios.get(config.url + 'sys/apps/menu')
  .then((res) => {
    success(res)
  }).catch((err) => {
    error(err)
  })
}