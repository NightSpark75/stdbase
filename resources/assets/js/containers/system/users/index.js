import React from 'react'
import axios from 'axios'
import { Table, Icon, Divider } from 'antd';
import { getUsers } from '../../../api'
//import Table from '../../../components/common/table'
import Confirm from '../../../components/common/modal'
import EditUser from '../../../components/common/modal'
import CreateUser from '../../../components/common/modal'
import Create from '../../../components/system/users/create'
import Update from '../../../components/system/users/update'

var source

const { Column, ColumnGroup } = Table;

const head = [
  { key: 'account', text: '帳號' },
  { key: 'name', text: '名稱' },
  { key: 'email', text: '電子信箱' },
]

const columns = [
  { key: 'account', title: '帳號', dataIndex: 'account' },
  { key: 'name', title: '名稱', dataIndex: 'name' },
  { key: 'email', title: '電子信箱', dataIndex: 'email' },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">Action 一 {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
        <Divider type="vertical" />
        <a href="javascript:;" className="ant-dropdown-link">
          More actions <Icon type="down" />
        </a>
      </span>
    ),
  }
]

export default class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      createShow: false,
      editShow: false,
      destroyShow: false,
      editId: '',
      destoryId: '',
      user: {
        account: '',
        password: '',
        name: '',
        email: '',
      },
    }
    this.createShow = this.createShow.bind(this)
    this.createHide = this.createHide.bind(this)
    this.createUser = this.createUser.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.destroyUser = this.destroyUser.bind(this)
    this.editShow = this.editShow.bind(this)
    this.editHide = this.editHide.bind(this)
    this.destroyShow = this.destroyShow.bind(this)
    this.desrtoyHide = this.desrtoyHide.bind(this)
    this.getUsers = this.getUsers.bind(this)
    this.changeData = this.changeData.bind(this)
  }

  componentWillMount() {
    source = axios.CancelToken.source()
    this.getUsers(1)
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    source.cancel('cancel getUsers')
  }

  getUsers(page) {
    const success = (res) => {
      console.log(res.data.data)
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
    const error = (err) => { }
    getUsers(page, success, error, source)
  }

  createShow() {
    this.setState({ createShow: true })
  }

  createHide() {
    this.setState({ createShow: false })
  }

  createUser() {
    console.log(this.state.user)
  }

  updateUser() {
    console.log('update user' + this.state.editId)
  }

  destroyUser() {
    console.log('destroy user' + this.state.destoryId)
  }

  editShow(id) {
    this.setState({
      editShow: true,
      editId: id,
    })
  }

  editHide() {
    this.setState({
      editShow: false,
      editId: '',
    })
  }

  destroyShow(id) {
    this.setState({
      destroyShow: true,
      destoryId: id,
    })
  }

  desrtoyHide() {
    this.setState({
      destroyShow: false,
      destoryId: '',
    })
  }

  changeData(e, key) {
    let data = this.state.user
    //data[key] = e.target.value
    console.log(data)
    data[key] = e.target.value
    console.log(data)
    console.log(this.state.user)
    //this.setState({ user: data })
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
      createShow,
      editShow,
      destroyShow,
      user,
    } = this.state
    return (
      <div>
        <h1>Users</h1>
        <Table columns={columns} dataSource={data} />
        {createShow &&
          <CreateUser
            title='新增使用者'
            content={<Create changeData={this.changeData} data={user}/>}
            cancel={this.createHide}
            cancelText='取消'
            ok={this.createUser}
            okText='新增'
            okType='primary'
          />
        }
        {destroyShow &&
          <Confirm
            title='刪除使用者'
            content={'111'}
            cancel={this.desrtoyHide}
            cancelText='取消'
            ok={this.destroyUser}
            okText='刪除'
            okType='danger'
          />
        }
        {editShow &&
          <EditUser
            title='編輯使用者'
            content={<Update />}
            cancel={this.editHide}
            cancelText='取消'
            ok={this.updateUser}
            okText='更新'
            okType='info'
          />
        }
      </div>
    )
  }
}