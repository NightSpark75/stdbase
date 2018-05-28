import React from 'react'
//import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Navbar from '../../components/main/navbar'
import Sidebar from '../../components/main/sidebar'
import Content from '../../components/main/content'

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

  switchContent(path, text, params) {
    if (path) {
      this.setState({path: path},
        () => {
          const payload = {
            page: `/${path}`,
            title: text,
            params: params,
          }
          this.props.history.push(payload.page)
        }
      )
    }
  }

  render() {
    const { path } = this.state
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
              <Route path={`/${path}`} component={Content} />
            </main>
          </div>
        </div>
      </div>
    )
  }
}

//export default Main
//export default connect(mapStateToProps)(Main)