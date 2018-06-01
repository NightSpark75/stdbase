import { removeUser } from '../common'

export function login(token) {
  window.localStorage.setItem('jwt-token', token)
}

export function logout() {
  removeUser()
  window.location = '/'
}