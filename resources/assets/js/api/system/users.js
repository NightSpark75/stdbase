import axios from 'axios'
import config from '../../config'

export function getUsers(success, error, source) {
  axios.get(config.url + 'sys/users', {cancelToken: source.token})
  .then((res) => {
    success(res)
  }).catch((err) => {
    error(err)
  })
}

export function createUser(params, success, error) {
  console.log('create')
  axios.post(config.url + 'sys/users', params)
  .then((res) => {
    success(res)
  }).catch((err) => {
    error(err)
  })
}

export function updateUser(params, id, success, error) {
  console.log('update')
  axios.patch(config.url + 'sys/users/' + id, params)
  .then((res) => {
    success(res)
  }).catch((err) => {
    error(err)
  })
}

export function destroyUser(id, success, error) {
  axios.delete(config.url + 'sys/users/' + id)
  .then((res) => {
    success(res)
  }).catch((err) => {
    error(err)
  })
}