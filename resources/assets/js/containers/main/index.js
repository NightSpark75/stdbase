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

export default class Main extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
    this.switchContent = this.switchContent.bind(this)
  }

  componentWillMount() {
    console.log('token: ' + window.localStorage['jwt-token'])
  }

  switchContent(path, text, params) {
    if (path) {
      const payload = {
        path: path,
        title: text,
        params: params,
      }
      this.props.history.push(path)
    }
  }

  render() {
    const path = this.props.location.pathname
    return (
      <div>
        <Navbar title="" />
        <div className="container-fluid" style={{ padding: 0, display: 'flex', flexWrap: 'nowrap' }}>
          <Sidebar switchContent={this.switchContent} />
          <main
            role="main"
            style={{ paddingTop: 48, paddingLeft: 7, width: 'calc(100% - 260px)' }}
          >
            <Route path={path} component={pages[path]} />
          </main>
        </div>
      </div>
    )
  }
}