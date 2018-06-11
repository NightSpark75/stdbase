import React from 'react'
import { getUsers } from '../../../api'
import Table from '../../../components/common/table'

const head = [
  { key: 'account', text: '帳號' },
  { key: 'name', text: '名稱' },
  { key: 'email', text: '電子信箱' },
]

export default class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
    }
    this.editUser = this.editUser.bind(this)
    this.destroyUser = this.destroyUser.bind(this)
    this.getUsers = this.getUsers.bind(this)
  }

  componentDidMount() {
    const page = window.localStorage['sys-user-page'] || 1
    this.getUsers(page)
  }

  componentWillUnmount() {
    window.localStorage.removeItem('sys-user-page')
  }

  getUsers(page) {
    window.localStorage['sys-user-page'] = page
    const success = (res) => {
      this.setState({ 
        users: res.data.data,
        current: res.data.current_page,
        last: res.data.last_page,
        from: res.data.from,
        to: res.data.to,
        per: res.data.per_page,
        total: res.data.total,
      })
    }
    const error = (err) => {
      console.log(err)
    }
    getUsers(page, success, error)
  }

  editUser() {
    console.log('edit user')
  }

  destroyUser() {
    console.log('destroy user')
  }

  render() {
    const { 
      users,
      current, 
      last, 
      from,
      to,
      per,
      total,
    } = this.state
    console.log(users)
    return (
      <div>
        <h1>Users</h1>
        <Table
          head={head}
          body={users}
          edit={this.editUser}
          destroy={this.destroyUser}
          current={current}
          last={last}
          from={from}
          to={to}
          per={per}
          total={total}
          go={this.getUsers}
        />
      </div>
    )
  }
}