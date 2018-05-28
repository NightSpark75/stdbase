import React from 'react'
import { Link } from 'react-router'
//import { logout } from '../../api/auth'
//import { connect } from 'react-redux'

function mapStateToProps(state) {
	return {
    base: state.base,
	}
}

class Navbar extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      
    }
    this.logout = this.logout.bind(this)
  }

  logout() {
    window.localStorage['jwt-token'] = ''
  }
  
  render() {
    return (
      <nav 
        className="navbar navbar-dark fixed-top flex-md-nowrap p-0 shadow" 
        style={{backgroundColor: 'rgb(0, 91, 171)'}}
      >
        <a 
          className="navbar-brand col-sm-3 col-md-3 col-lg-2 col-xl-2 mr-0" 
          href="/" 
          style={{
            backgroundColor: 'rgb(0, 68, 128)',
            fontWeight: '700'
          }}
        >
          Bland{/* 生達化學製藥 */}
        </a>
        <div style={{marginLeft: 15, width: '100%'}}>
          <span className="text-light"></span>
        </div>
        <ul 
          className="navbar-nav px-3" 
          style={{backgroundColor: 'rgb(0, 68, 128)'}}
        >
          <li className="nav-item text-nowrap">
            <a 
              className="nav-link" 
              href="#"
              style={{
                color: '#FFF',
              }}
              onClick={this.logout}
            >
              登出
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
//export default connect(mapStateToProps)(Navbar)