import React from 'react'
import { logout } from '../../lib'

function mapStateToProps(state) {
	return {
    base: state.base,
	}
}

export default class Navbar extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      
    }
  }
  
  render() {
    const userName = window.localStorage['user-name']
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
          <span className="text-light">
            {'hi ~ ' + userName}
          </span>
        </div>
        <button 
          className="btn btn-link nav-link" 
          style={{
            color: '#FFF',
            backgroundColor: 'rgb(0, 68, 128)',
          }}
          onClick={logout}
        >
          登出
        </button>
      </nav>
    )
  }
}