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
  sider: {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    left: 0,
    top: 41,
    background: '#fff',
  },
  rightLayout: { background: '#fff' },
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
      <Layout>
        <Blade onClick={this.goHome}/>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
          width={256}
          style={styles.sider}
        >
          <Sidebar switchContent={this.switchContent} />
        </Sider>
        <Layout style={styles.rightLayout}>
          <Header style={styles.header}>
            <Menu
              theme="dark"
              mode="horizontal"
              style={styles.headerMenu}
            >
              <Menu.Item key="logout" onClick={logout}>
                <span className="fas fa-sign-out-alt">
                  <span>登出</span>
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