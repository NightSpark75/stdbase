import React from 'react'

export default class Input extends React.Component {

  render() {
    const id = Math.ceil(Math.random() * 1000000000)
    const { 
      onChange, 
      label, 
      onKeyPress, 
      type, 
      placeholder,
      maxLength,
      defaultValue,
      message,
    } = this.props
    return (
      <div className="form-group">
        <label htmlFor={id}>{this.props.label}</label>
        <input
          id={id}
          className="form-control"
          type={type||'text'}
          placeholder={placeholder||''}
          maxLength={maxLength||'30'}
          defaultValue={defaultValue||''}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <small className="form-text text-muted">{message||''}</small>
      </div>
    )
  }
}
