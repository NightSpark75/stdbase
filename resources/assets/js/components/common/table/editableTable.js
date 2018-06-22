import React from 'react'
import { Table, Modal, Divider, Button, Form, Input, Icon, Popconfirm, message, Select } from 'antd'

const FormItem = Form.Item

export default class EditableTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      editId: '',
      columns: [],
      loading: false,
      searchKey: this.props.columns[0].key,
      searchString: '',
      source: [],
    }
    this.columns = {
      title: '',
      key: 'action',
      width: this.props.actionWidth || 100,
      render: (text, record) => {
        const editable = this.isEditing(record)
        return (
          <div style={{ overflow: 'visible' }}>
            {editable ? (
              <span>
                <EditableContext.Consumer>
                  {form => (
                    <Button
                      type="primary"
                      size="small"
                      onClick={() => this.save(form, record.id)}
                    >
                      <Icon type="check" />
                    </Button>
                  )}
                </EditableContext.Consumer>
                <Divider type="vertical" />
                <Popconfirm
                  title="確定要取消?"
                  onConfirm={() => this.cancel(record.id)}
                >
                  <Button
                    type="danger"
                    size="small"
                  >
                    <Icon type="close" />
                  </Button>
                </Popconfirm>
              </span>
            ) : (
                <div>
                  <Button
                    type="primary"
                    size="small"
                    onClick={() => this.edit(record.id)}
                  >
                    <Icon type="edit" />
                  </Button>
                  <Divider type="vertical" />
                  <Button
                    type="danger"
                    size="small"
                    onClick={() => {
                      Modal.confirm({
                        title: '警告',
                        content: '您確定要刪除資料嗎？',
                        okText: '確定',
                        cancelText: '取消',
                        onOk: () => this.destroy(record.id),
                      })
                    }}
                  >
                    <Icon type="delete" />
                  </Button>
                </div>
              )}
            {this.props.actions}
          </div>
        )
      },
    }
    this.add = this.add.bind(this)
    this.searching = this.searching.bind(this)
    this.setSearchKey = this.setSearchKey.bind(this)
  }

  componentWillReceiveProps(newProps) {
    if (this.props.data !== newProps.data) {
      this.setState({
        data: newProps.data,
        editId: '',
        source: newProps.data,
      })
    }
  }

  isEditing(record) {
    return record.id === this.state.editId
  }

  edit(id) {
    this.setState({ editId: id })
  }

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return
      }
      const newData = [...this.state.data]
      const index = newData.findIndex(item => key === item.id)
      if (index > -1) {
        const item = newData[index]
        newData.splice(index, 1, {
          ...item,
          ...row,
        })
        const data = newData[index]
        const error = (err) => {
          console.log(err)
          const info = err.response.data.errorInfo
          Modal.error({
            title: '錯誤訊息...',
            content: `${info[2]}(${info[0]})`,
          })
          this.setState({ loading: false })
        }
        this.setState({ loading: true }, () => {
          if (key === 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx') {
            const success = (res) => {
              this.setState({
                data: res.data,
                editId: '',
                loading: false,
                source: res.data,
              }, () => { 
                message.success('資料新增成功')
                this.searching(this.state.searchString)
              })
            }
            this.props.create(data, success, error)
          } else {
            const success = (res) => {
              this.setState({
                data: res.data,
                editId: '',
                loading: false,
                source: res.data,
              }, () => {
                message.success('資料更新成功')
                this.searching(this.state.searchString)
              })
            }
            this.props.update(data, key, success, error)
          }
        })
      } else {
        newData.push(this.state.data)
        this.setState({ data: newData, editId: '' })
      }
    })
  }

  cancel() {
    let data = this.state.data
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx') {
        data.splice(i, 1)
        break
      }
    }
    this.setState({
      data: data,
      editId: '',
    })
  }

  add() {
    const { data, editId } = this.state
    if (editId === 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx') return
    const columns = this.props.columns
    const newData = new Object()
    newData.id = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
    columns.map((obj) => {
      newData[obj.key] = null
    })
    this.setState({
      data: [newData, ...data],
      editId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    })
  }

  destroy(id) {
    const success = (res) => {
      this.setState({
        data: res.data,
        loading: false,
        source: res.data,
      }, () => {
        message.success('資料刪除成功')
        this.searching(this.state.searchString)
      })
    }
    const error = (err) => {
      console.log(err)
      const info = err.response.data.errorInfo
      Modal.error({
        title: '錯誤訊息...',
        content: `${info[2]}(${info[0]})`,
      })
      this.setState({ loading: false })
    }
    this.setState({ loading: true }, () => {
      this.props.destroy(id, success, error)
    })
  }

  getColumns() {
    let arr = []
    this.props.columns.map((item) => {
      arr.push(item)
    })
    if (this.props.columns) arr.push(this.columns)
    const columns = arr.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      }
    })
    return columns
  }

  getRowSelection() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', 
        name: record.name,
      }),
      type: 'radio',
    };
    return rowSelection
  }

  getComponents() {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    }
    return components
  }

  setSearchKey(key) {
    this.setState({ searchKey: key })
    console.log(`search key: ${key}`)
  }

  searching(value) {
    const { searchKey, data, source } = this.state
    if (value.length === 0) {
      this.setState({ data: source, searchString: value})
      return
    }
    
    let arr = []
    source.map((obj) => { 
      if (obj[searchKey].search(value) >= 0) {
        arr.push(obj)
      }
    })
    this.setState({ data: arr, searchString: value })
  }

  render() {
    const { data, loading } = this.state
    const columns = this.getColumns()
    const rowSelection = this.getRowSelection()
    const components = this.getComponents()
    const scroll = this.props.tableWidth ? { x: this.props.tableWidth } : {}
    return (
      <div>
        <Button
          onClick={this.add}
          type="primary"
          style={{ marginBottom: 16 }}
          disabled={data.length === 0}
        >
          <Icon type="file-add" />
        </Button>
        <Input.Search
          placeholder="輸入搜尋值..."
          onSearch={value => this.searching(value)}
          style={{ width: 200, float: 'right', marginLeft: '3px' }}
        />
        <Select
          defaultValue={this.props.columns[0].title}
          style={{ width: 120, float: 'right' }}
          onChange={this.setSearchKey}
        >
          {this.props.columns.map((object) => (
            <Select.Option key={object.key} value={object.key}>{object.title}</Select.Option>
          ))}
        </Select>
        <Table
          rowKey="id"
          scroll={scroll}
          components={components}
          columns={columns}
          dataSource={data}
          bordered
          size="small"
          loading={loading}
          pagination={{ pageSize: 15 }}
        />
      </div>
    )
  }
}

const EditableContext = React.createContext()

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
)

const EditableFormRow = Form.create()(EditableRow)

class EditableCell extends React.Component {
  constructor(props) {
    super(props)
  }

  getInput(inputType = null, max = null, min = null) {
    switch (inputType) {
      case 'number':
        return <InputNumber />
      default:
        return <Input />
    }
  }

  render() {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      ...restProps
    } = this.props
    return (
      <EditableContext.Consumer>
        {(form) => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {getFieldDecorator(dataIndex, {
                    rules: [{
                      required: true,
                      message: `Please Input ${title}!`,
                    }],
                    initialValue: record[dataIndex],
                  })(this.getInput(inputType))}
                </FormItem>
              ) : restProps.children}
            </td>
          )
        }}
      </EditableContext.Consumer>
    )
  }
}