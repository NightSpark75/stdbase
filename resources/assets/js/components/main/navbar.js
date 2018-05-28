import React from 'react'
import { logout } from '../../lib'
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
            <button 
              className="btn btn-link nav-link" 
              style={{
                color: '#FFF',
              }}
              onClick={logout}
            >
              登出
            </button>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
//export default connect(mapStateToProps)(Navbar)