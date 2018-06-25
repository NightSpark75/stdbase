import React from 'react'
import axios from 'axios'
import EditableTable from  '../../../components/common/table/editableTable'
import { getApps, createApps, updateApps, destroyApps } from '../../../api'

let source

const columns = [
  { key: 'name', title: '名稱', dataIndex: 'name', editable: true, width: 200 },
  { key: 'path', title: '路徑', dataIndex: 'path', editable: true, width: 200 },
  { key: 'icon', title: '圖示', dataIndex: 'icon', editable: true, wdith: 260 },
  { key: 'seq', title: '功能編號', dataIndex: 'seq', editable: true, wdith: 260 },
]

export default class Apps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
    this.getApps = this.getApps.bind(this)
  }

  componentWillMount() {
    source = axios.CancelToken.source()
    this.getApps()
  }

  componentWillUnmount() {
    source.cancel('cancel getUsers')
  }

  getApps() {
    const success = (res) => {
      console.log(res.data)
      this.setState({
        data: res.data,
      })
    }
    const error = (err) => { 
      console.log(err)
    }
    getApps(success, error, source)
  }

  render() {
    const { data } = this.state
    return (
      <div>
        <h1>功能模組管理</h1>
        <div style={{ width: 1024 }}>
          <EditableTable 
            data={data}
            columns={columns}
            create={createApps}
            update={updateApps}
            destroy={destroyApps}
            reload={this.getApps}
          />
        </div>
      </div>
    )
  }
}