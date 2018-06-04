import React from 'react'

export default class Header extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {

    }
  }
  render() {
    return (
      <div style={{ width: 260, backgroundColor: 'rgb(0, 68, 128)', paddingLeft: 10 }}>
        <a
          className="navbar-brand"
          href="/"
          style={{
            padding: 0,
            lineHeight: '41px',
            display: 'flex',
            fontWeight: '700',
          }}
        >
          Bland{/* 生達化學製藥 */}
        </a>
      </div>
    )
  }
}