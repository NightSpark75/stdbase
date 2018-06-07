import base64 from 'base-64'
import { refreshToken } from '../../api'

export function saveToken(token) {
  window.localStorage['jwt-token'] = token
  console.log('save token: ' + token)
}

export function loadToken() {
  const token = window.localStorage['jwt-token']
  console.log('load token: ' + token)
  return token
}

export function parseToken(token = null) {
  token = token || window.localStorage['jwt-token']
  if (token) {
    try {
      let payload = token.split('.')
      return JSON.parse(new Buffer(payload[1], 'base64').toString())
    } catch (e) {
      console.log(e)
      return null
    }
  }
  return null
}

export function jwtPayload(token) {
  try {
    const code = token.split('.')[1]
    let payload = base64.decode(code)
    return JSON.parse(payload)
  } catch (e) {
    return null;
  }
}

export function checkToken() {
  const token = window.localStorage['jwt-token']
  if (token !== undefined && token !== null) {
    console.log('check token')
    const code = token.split('.')[1]
    const payload = JSON.parse(base64.decode(code))
    const date = new Date()
    const time = date.getTime()
    if (payload.exp * 1000 < time) {
      console.log('token expired')
    } else if (payload.exp * 1000 < date.setMinutes(date.getMinutes() + 30)) {
      console.log('refresh token')
      refreshToken()
    }
  }
}

export function saveUser(token, user) {
  console.log('token: ' + token)
  window.localStorage['jwt-token'] = token
  window.localStorage['user-name'] = user.name
}

export function removeUser() {
  console.log('remove user')
  window.localStorage.removeItem('jwt-token')
  window.localStorage.removeItem('user-name')
}