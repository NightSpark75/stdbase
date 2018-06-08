import React, { Component } from 'react'

export default class Rows extends Component {
  constructor(props) {
      super(props)
  }

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.account}
          </td>
          <td>
            {this.props.obj.name}
          </td>
          <td>
          </td>
        </tr>
    )
  }
}