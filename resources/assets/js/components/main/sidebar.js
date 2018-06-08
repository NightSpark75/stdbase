import React from 'react'
import { apps } from '../../api'
import Apps from './apps'

export default class Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      list: [],
      height: 'calc(100vh - 48px)',
      wapperHeight: null,
    }

    this.flexHeight = this.flexHeight.bind(this)
    this.switchContent = this.props.switchContent
  }

  componentDidMount() {
    this.setState({ wapperHeight: this.refs.wapper.clientHeight })
    if (window.localStorage['apps']) {
      console.log('loading local apps list')
      this.setState({ list: JSON.parse(window.localStorage['apps']) })
    }
    this.getApps()
  }

  getApps() {
    const success = (res) => {
      console.log('refresh new apps list')
      this.setState({ list: res.data })
      window.localStorage['apps'] = JSON.stringify(res.data)
    }
    const error = (e) => {
      const res = e.response
    }
    apps(success, error)
  }

  flexHeight() {
    const { wapperHeight } = this.state
    let height = this.refs.ulid_0 ? this.refs.ulid_0.clientHeight : 'calc(100vh - 48px)'
    this.setState({ height: height > wapperHeight ? height : 'calc(100vh - 48px)' })
  }

  render() {
    const { list } = this.state
    return (
      <div
        className="d-none d-md-block bg-light sidebar border-right"
        style={{
          width: 260,
          padding: '48px 0 0'
        }}
      >
        <div
          style={{ height: this.state.height }}
          ref="wapper"
        >
          <Apps
            list={list}
            index={0}
            switchContent={this.switchContent}
            resize={this.flexHeight}
          />
        </div>
      </div>
    )
  }
}