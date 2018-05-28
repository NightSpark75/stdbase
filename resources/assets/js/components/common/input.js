import React from 'react'

export default class Input extends React.Component {

  render() {
    const id = Math.ceil(Math.random() * 1000000000)
    const type = this.props.type||'text'
    const placeholder = this.props.placeholder||''
    const maxLength = this.props.maxLength||'30'
    const defaultValue = this.props.defaultValue||''
    const onChange = this.props.onChange
    const label = this.props.label
    return (
      <div className="form-group">
        <label htmlFor={id}>{this.props.label}</label>
        <input
          id={id}
          className="form-control"
          type={type}
          placeholder={placeholder}
          maxLength={maxLength}
          defaultValue={defaultValue}
          onChange={onChange}
        />
        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
      </div>
    )
  }
}
