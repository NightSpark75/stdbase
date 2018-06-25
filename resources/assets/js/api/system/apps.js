import { index, create, update, destroy } from './resource'
const route = 'apps'

export function getApps(success, error, source) {
  index(route, success, error, source);
}

export function createApps(params, success, error) {
  console.log('create')
  create(route, params, success, error)
}

export function updateApps(params, id, success, error) {
  console.log('update')
  update(route, params, id, success, error)
}

export function destroyApps(id, success, error) {
  console.log('destroy')
  destroy(route, id, success, error)
}