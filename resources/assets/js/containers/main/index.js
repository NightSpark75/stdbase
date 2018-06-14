import React from 'react'
import { Route } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import Blade from '../../components/main/navbar/header'
import Navbar from '../../components/main/navbar'
import Sidebar from '../../components/main/sidebar'
import pages from '../../pages'

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
      this.props.history.push(payload.path)
    }
  }

  render() {
    const path = this.props.location.pathname
    return (
      <Layout>
        {/* <Navbar title="" /> */}
        <Blade />
        <Sider 
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
          style={{ 
            overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 41, background: '#fff' 
          }}
        >
          <Sidebar switchContent={this.switchContent} />
        </Sider>
        <Layout style={{ background: '#fff' }}>
          {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
          <Content style={{ margin: '12px 8px 0', overflow: 'initial', background: '#fff' }}>
            <Route path={path} component={pages[path]} />
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer> */}
        </Layout>
      </Layout>
    )
  }
}