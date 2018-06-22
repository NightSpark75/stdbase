import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Layout, Menu } from 'antd'
import Blade from '../../components/main/navbar/header'
import Sidebar from '../../components/main/sidebar'
import pages from '../../pages'
import { logout } from '../../lib'
import { setOpenKey, setSelectedKey } from '../../reducers/base/baseAction'

const { Header, Content, Sider } = Layout

const styles = {
  header: {
    background: 'rgb(68, 68, 68)',
    padding: 0,
    height: 41,
  },
  headerMenu: {
    float: 'right',
    lineHeight: '41px',
  },
  content: {
    margin: '12px 8px 0',
    overflow: 'initial',
    background: '#fff',
    overflow: 'auto',
  },
}

class Main extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.switchContent = this.switchContent.bind(this)
  }

  componentWillMount() {
    console.log('token: ' + window.localStorage['jwt-token'])
    let openKey = window.localStorage['menuOpenKey'] ? [window.localStorage['menuOpenKey']] : []
    let selectedKey = window.localStorage['menuSelectKey'] ? [window.localStorage['menuSelectKey']] : []
    this.props.dispatch(setOpenKey(openKey))
    this.props.dispatch(setSelectedKey(selectedKey))
  }

  switchContent(path) {
    if (path) this.props.history.push(path)
  }

  render() {
    const path = this.props.location.pathname
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider width={256} style={{ backgroundColor: '#FFF' }}>
          <Blade onClick={this.goHome} />
          <Sidebar switchContent={this.switchContent} />
        </Sider>
        <Layout style={{ backgroundColor: '#FFF' }}>
          <Header style={styles.header}>
            <Menu
              theme="dark"
              mode="horizontal"
              style={styles.headerMenu}
            >
              <Menu.Item key="logout" onClick={logout} style={{ background: 'rgb(0, 0, 0)' }}>
                <span className="fas fa-sign-out-alt">
                  <span style={{ fontWeight: '500' }}>登出</span>
                </span>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={styles.content}>
            <Route path={path} component={pages[path]} />
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default connect()(Main)