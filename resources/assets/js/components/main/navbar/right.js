import React from 'react'
import { logout } from '../../../lib'

export default class Title extends React.Component {
  render() {
    return (
      <button
        className="btn btn-link nav-link"
        style={{
          float: 'right',
          color: '#FFF',
          backgroundColor: 'rgb(0, 68, 128)',
        }}
        onClick={logout}
      >
        登出
      </button>
    )
  }
}