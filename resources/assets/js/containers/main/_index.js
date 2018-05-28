import React from 'react'
import { saveToken } from '../../lib'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.logout = this.logout.bind(this)
  }

  logout() {
    const token = ''
    saveToken(token)
    this.props.history.go("/");
  }

  render() {
    return (
      <div>
        main
        <button type="button" className="btn btn-danger" onClick={this.logout}>
          Danger
        </button>
      </div>
    )
  }
}