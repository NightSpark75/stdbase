import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { setOpenKey, setSelectedKey } from '../../../reducers/base/baseAction'

class Header extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.goHome = this.goHome.bind(this)
  }
  goHome() {
    this.props.dispatch(setOpenKey([]))
    this.props.dispatch(setSelectedKey([]))
    this.props.history.push('/')
  }
  render () {  
    return (
      <div style={{ width: 256, backgroundColor: '#000', paddingLeft: 24, height: '41px' }}>
        <button
          className="navbar-brand btn btn-link"
          onClick={this.goHome}
          style={{
            padding: 0,
            lineHeight: '41px',
            display: 'flex',
            fontWeight: '700',
          }}
        >
          Bland
        </button>
      </div>
    )
  }
}

export default connect()(withRouter(Header))