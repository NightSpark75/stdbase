import React, { Component } from 'react'

export default class Button extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const className = 'btn btn-' + this.props.className || 'primary'
    const text = this.props.text || '按鈕'
    const onClick = this.props.onClick
    return (
      <button 
        type="button" 
        className={className}
        onClick={onClick}
      >
        {text}
      </button>
    )
  }
}