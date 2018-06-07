import React from 'react'
import Input from '../common/input'

export default class InputPassword extends React.Component {

  render() {
    return (
      <Input
        type="password"
        placeholder="輸入密碼"
        maxLength="20"
        defaultValue={this.props.defaultValue}
        onChange={this.props.onChange}
        onKeyPress={this.props.onKeyPress}
      />
    )
  }
}
