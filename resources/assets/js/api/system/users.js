import axios from 'axios'
import config from '../../config'

export function getUsers(page, success, error, source) {
  axios.get(config.url + 'sys/users/paginate?page=' + page, {cancelToken: source.token})
  .then((res) => {
    success(res)
  }).catch((err) => {
    error(err)
  })
}

export function createUsers(params, success, error) {
  axios.post(config.url + 'sys/users')
  .then((res) => {
    success(res)
  }).catch((err) => {
    error(err)
  })
}

export function updateUsers(params, id, success, error) {
  axios.patch(config.url + 'sys/users/' + id)
  .then((res) => {
    success(res)
  }).catch((err) => {
    error(err)
  })
}

export function destroyUsers(page, success, error) {
  axios.delete(config.url + 'sys/users/paginate?page=' + page)
  .then((res) => {
    success(res)
  }).catch((err) => {
    error(err)
  })
}