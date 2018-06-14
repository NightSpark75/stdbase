import React from 'react'
import { getApps } from '../../api'
import Apps from './apps'

export default class Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      list: [],
      height: 'calc(100vh - 41px)',
      wapperHeight: null,
    }

    this.flexHeight = this.flexHeight.bind(this)
    this.switchContent = this.props.switchContent
  }

  componentDidMount() {
    this.setState({ wapperHeight: this.refs.wapper.clientHeight })
    if (window.localStorage['apps']) {
      console.log('loading localStorage[\'apps\']')
      this.setState({ list: JSON.parse(window.localStorage['apps']) })
    }
    this.getApps()
  }

  getApps() {
    const success = (res) => {
      console.log('set apps list')
      this.setState({ list: res.data })
      window.localStorage['apps'] = JSON.stringify(res.data)
    }
    const error = (e) => {
      console.log(e.response)
    }
    getApps(success, error)
  }

  flexHeight() {
    const { wapperHeight } = this.state
    let height = this.refs.ulid_0 ? this.refs.ulid_0.clientHeight : 'calc(100vh - 41px)'
    this.setState({ height: height > wapperHeight ? height : 'calc(100vh - 41px)' })
  }

  render() {
    const { list } = this.state
    return (
      <div className="d-none d-md-block bg-light sidebar border-right">
        <div ref="wapper" style={{ height: this.state.height }}>
          <Apps
            list={list}
            switchContent={this.props.switchContent}
            height={this.state.height}
          />
        </div>
      </div>
    )
  }
}