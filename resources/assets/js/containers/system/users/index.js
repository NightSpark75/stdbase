import React from 'react'
import axios from 'axios'
import { getUsers } from '../../../api'
import EditableTable from  '../../../components/common/table/editableTable'
import { createUser, updateUser, destroyUser } from '../../../api'

let source

const columns = [
  { key: 'account', title: '帳號', dataIndex: 'account', editable: true, width: 200 },
  { key: 'name', title: '名稱', dataIndex: 'name', editable: true, width: 200 },
  { key: 'email', title: '電子信箱', dataIndex: 'email', editable: true, wdith: 260 },
]

export default class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }

    this.getUsers = this.getUsers.bind(this)
  }

  componentWillMount() {
    source = axios.CancelToken.source()
    this.getUsers()
  }

  componentWillUnmount() {
    source.cancel('cancel getUsers')
  }

  getUsers() {
    const success = (res) => {
      console.log(res.data)
      this.setState({
        data: res.data,
      })
    }
    const error = (err) => { 
      console.log(err)
    }
    getUsers(success, error, source)
  }

  render() {
    const { data } = this.state
    return (
      <div>
        <h1>使用者管理</h1>
        <div style={{ width: 1024 }}>
          <EditableTable 
            data={data}
            columns={columns}
            create={createUser}
            update={updateUser}
            destroy={destroyUser}
            reload={this.getUsers}
          />
        </div>
      </div>
    )
  }
}