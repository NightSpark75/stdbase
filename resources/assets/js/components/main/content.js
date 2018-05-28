import React from 'react'
import { Link } from 'react-router'
//import { connect } from 'react-redux'

function mapStateToProps(state) {
	return {
    base: state.base,
	}
}

class Content extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {JSON.stringify(this.props)}
      </div>
    )
  }
}

export default Content
//export default connect(mapStateToProps)(Content)