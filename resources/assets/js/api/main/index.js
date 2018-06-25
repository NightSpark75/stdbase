import axios from 'axios'
import config from '../../config'

export function getMenu(success, error) {
  axios.get(config.url + 'sys/menu')
  .then((res) => {
    success(res)
  }).catch((err) => {
    error(err)
  })
}