import React, { Component } from 'react'

export default class Thead extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { head, hasAction } = this.props
    return (
      <thead>
        <tr>
          <td>#</td>
          {head.map((object, index) => (
            <td
              key={index}
              width={object.width}
            >
              {object.text}
            </td>
          ))}
          {hasAction && 
            <td></td>
          }
        </tr>
      </thead>
    )
  }
}