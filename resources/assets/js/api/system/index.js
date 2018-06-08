import axios from 'axios'
import config from '../../config'

export function getUsers(success, error) {
  axios.get(config.url + 'sys/users')
  .then((res) => {
    success(res)
  }).catch((err) => {
    error(err)
  })
}