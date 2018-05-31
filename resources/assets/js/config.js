const protocol = 'http'
const host = 'stdbase.com'
const url = protocol + '://' + host + '/api'
const dt = new Date()
const date = dt.getFullYear() + (dt.getMonth() + 1 < 10 ? '0' : '') + (dt.getMonth() + 1) + (dt.getDate() < 10 ? '0' : '') + dt.getDate()

export default {
  dt: dt,
  date: date,
  url: url,
}