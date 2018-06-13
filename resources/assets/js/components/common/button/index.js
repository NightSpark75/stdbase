import React, { Component } from 'react'

export default class Button extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const className = 'btn btn-' + this.props.className || 'primary'
    const text = this.props.text || '按鈕'
    const onClick = this.props.onClick
    const size = this.props.size ? ' btn-' + this.props.size : ''
    return (
      <button 
        type="button" 
        className={className + size}
        onClick={onClick}
      >
        {text}
      </button>
    )
  }
}