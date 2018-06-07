import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {

    }
  }
  render() {
    return (
      <div style={{ width: 260, backgroundColor: 'rgb(0, 68, 128)', paddingLeft: 10 }}>
        <Link
          className="navbar-brand"
          to="/"
          style={{
            padding: 0,
            lineHeight: '41px',
            display: 'flex',
            fontWeight: '700',
          }}
        >
          Bland{/* 生達化學製藥 */}
        </Link>
      </div>
    )
  }
}