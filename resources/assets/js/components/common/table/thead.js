import React, { Component } from 'react'
import Button from '../button'

export default class Thead extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { head, hasAction, create } = this.props
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
            <td>
              <Button className='primary' size='sm' onClick={create} text='新增' />
            </td>
          }
        </tr>
      </thead>
    )
  }
}