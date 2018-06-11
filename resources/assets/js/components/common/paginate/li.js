import React, { Component } from 'react'
import Button from '../button'

export default class Li extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { disabled, text, onClick } = this.props
    return (
      <li className={disabled ? 'page-item disabled' : 'page-item'}>
        <button className="page-link btn" onClick={onClick}>{text}</button>
      </li>
    )
  }
}