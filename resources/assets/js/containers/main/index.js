import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from '../../components/main/navbar'
import Sidebar from '../../components/main/sidebar'
import pages from '../../pages'
import Home from './home'

import { checkToken } from '../../lib'

function mapStateToProps(state) {
  return {
    base: state.base,
  }
}

function content(path = '/', componentName = 'home') { 
  var component = pages[componentName]
  return (
    <Route path={path} component={component} />
  )
}

export default class Main extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
    this.switchContent = this.switchContent.bind(this)
  }

  componentWillMount() {
    //checkToken()
  }

  switchContent(path, componentName, text, params) {
    if (path && componentName) {
      this.setState({
        path: path,
        componentName: componentName,
      }, () => {
        const payload = {
          path: path,
          title: text,
          params: params,
        }
        this.props.history.push(payload.path)
      }
      )
    }
  }

  render() {
    const { path, componentName } = this.state
    return (
      <div>
        <Navbar title="" />
        <div className="container-fluid" style={{ padding: 0, display: 'flex', flexWrap: 'nowrap' }}>
          <Sidebar switchContent={this.switchContent} />
          <main
            role="main"
            style={{ paddingTop: 48, paddingLeft: 7, width: 'calc(100% - 260px)'}}
          >
            {/* <Route path="/" component={Home} /> */}
            {content(path, componentName)}
          </main>
        </div>
      </div>
    )
  }
}