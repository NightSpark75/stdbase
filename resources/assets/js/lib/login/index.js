export function login(token) {
  window.localStorage.setItem('jwt-token', token)
}

export function logout() {
  window.localStorage.removeItem('jwt-token')
  window.location = '/'
}