import React, { Component } from 'react'
import Button from '../button'

export default class Action extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { edit, destroy } = this.props
    return (
      <td>
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <Button className='info' onClick={() => edit(this.props.id)} text='編輯' />
          <Button className='danger' onClick={() => destroy(this.props.id)} text={'刪除'} />
        </div>
      </td>
    )
  }
}