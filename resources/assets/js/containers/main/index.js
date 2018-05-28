import React from 'react'
//import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Navbar from '../../components/main/navbar'
import Sidebar from '../../components/main/sidebar'
import Content from '../../components/main/content'
import pages from '../../components/pages'

function mapStateToProps(state) {
	return {
    base: state.base,
	}
}

function content(path, componentName = 'Page1') {
  var component = pages[componentName]
  return (
    <Route path={'/' + path} component={component} />
  )
}

export default class Main extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
    this.switchContent = this.switchContent.bind(this)
  }

  switchContent(path, componentName, text, params) {
    if (path && componentName) {
      this.setState({
        path: path,
        componentName: componentName, 
      }, () => {
          const payload = {
            path: '/' + path,
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
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <Sidebar switchContent={this.switchContent}/>
            <main 
              role="main" 
              className="col-md-9 ml-sm-auto col-lg-10"
              style={{paddingTop: 48}}
            >
              {content(path, componentName)}
              {/* <Route path={`/${path}`} component={Content} /> */}
            </main>
          </div>
        </div>
      </div>
    )
  }
}

//export default Main
//export default connect(mapStateToProps)(Main)