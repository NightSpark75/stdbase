import React from 'react'
import Header from './header'
import Title from './title'
import Right from './right'

export default class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-dark fixed-top p-0 shadow"
        style={{ backgroundColor: 'rgb(0, 91, 171)' }}
      >
        <div className="container-fluid" style={{ display: 'flex', padding: 0, flexWrap: 'nowrap' }}>
          <Header />
          <div style={{width: 'calc(100% - 260px)'}}>
            <Title />
            <Right />
          </div>
        </div>
      </nav>
    )
  }
}