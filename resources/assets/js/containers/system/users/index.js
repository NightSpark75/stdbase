import React from 'react'
import axios from 'axios'
import { Table, Modal, Divider, Button, Form, Input, Radio } from 'antd';
import { getUsers } from '../../../api'
//import Table from '../../../components/common/table'
import Confirm from '../../../components/common/modal'
import EditUser from '../../../components/common/modal'
import CreateUser from '../../../components/common/modal'
import Create from '../../../components/system/users/create'
import Update from '../../../components/system/users/update'

var source

const FormItem = Form.Item;



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
    this.getColumns = this.getColumns.bind(this)
    this.getRowSelection = this.getRowSelection.bind(this)
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
    this.getUsers()
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    source.cancel('cancel getUsers')
  }

  getUsers() {
    const success = (res) => {
      console.log(res.data)
      this.setState({
        users: res.data,
      })
    }
    const error = (err) => { 
      console.log(err)
    }
    getUsers(success, error, source)
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

  getColumns () {
    const columns = [
      { key: 'account', title: '帳號', dataIndex: 'account' },
      { key: 'name', title: '名稱', dataIndex: 'name' },
      { key: 'email', title: '電子信箱', dataIndex: 'email' },
      {
        title: 'Action',
        key: 'action',
        width: 130,
        render: (text, record) => (
          <span>
            <Button size="small" onClick={this.createShow}>編輯</Button>
            <Divider type="vertical" />
            <Button type="danger" size="small" onClick={this.destroyShow}>刪除</Button>
          </span>
        ),
      }
    ]
    return columns
  }

  getRowSelection() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
      type: 'radio',
    };
    return rowSelection
  }

  render() {
    const {
      users,
      createShow,
      editShow,
      destroyShow,
    } = this.state
    const columns = this.getColumns()
    const rowSelection = this.getRowSelection()
    return (
      <div>
        <h1>Users</h1>
        <Table 
          rowKey="id"
          columns={columns} 
          dataSource={users} 
          bordered={true}
          size="small"
          pagination={{ pageSize: 15 }}
          rowSelection={rowSelection}
        />
        <CollectionCreateForm
          //wrappedComponentRef={this.saveFormRef}
          visible={createShow}
          onCancel={this.createHide}
          onCreate={this.createUser}
        />
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

const CollectionCreateForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new collection"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="Title">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="Description">
              {getFieldDecorator('description')(<Input type="textarea" />)}
            </FormItem>
            <FormItem className="collection-create-form_last-form-item">
              {getFieldDecorator('modifier', {
                initialValue: 'public',
              })(
                <Radio.Group>
                  <Radio value="public">Public</Radio>
                  <Radio value="private">Private</Radio>
                </Radio.Group>
              )}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);
