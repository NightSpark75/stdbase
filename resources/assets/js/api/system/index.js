import axios from 'axios'
import config from '../../config'

export function getUsers(page, success, error) {
  axios.get(config.url + 'sys/users/paginate?page=' + page)
  .then((res) => {
    success(res)
  }).catch((err) => {
    error(err)
  })
}