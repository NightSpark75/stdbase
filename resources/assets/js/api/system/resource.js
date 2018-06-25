import axios from 'axios'
import config from '../../config'

export function index(route, success, error, source) {
  axios.get(config.url + `sys/${route}`, {cancelToken: source.token})
  .then((res) => {
    success(res)
  }).catch((err) => {
    error(err)
  })
}

export function create(route, params, success, error) {
  console.log('create')
  axios.post(config.url + `sys/${route}`, params)
  .then((res) => {
    success(res)
  }).catch((err) => {
    error(err)
  })
}

export function update(route, params, id, success, error) {
  console.log('update')
  axios.patch(config.url + `sys/${route}/` + id, params)
  .then((res) => {
    success(res)
  }).catch((err) => {
    error(err)
  })
}

export function destroy(route, id, success, error) {
  axios.delete(config.url + `sys/${route}/` + id)
  .then((res) => {
    success(res)
  }).catch((err) => {
    error(err)
  })
}