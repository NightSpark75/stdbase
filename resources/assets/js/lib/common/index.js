export function saveToken(token) {
  window.localStorage["jwt-token"] = token
  console.log('save token: ' + token)
}

export function loadToken() {
const token = window.localStorage["jwt-token"]
console.log('load token: ' + token)
return token
}

export function parseToken(token = null) {
token = token || window.localStorage["jwt-token"]
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