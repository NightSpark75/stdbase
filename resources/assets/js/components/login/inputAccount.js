import React from 'react'
import Input from '../common/input'

export default class InputAccount extends React.Component {

  render() {
    return (
      <Input
        placeholder="輸入帳號"
        maxLength="20"
        defaultValue={this.props.defaultValue}
        onChange={this.props.onChange}
        onKeyPress={this.props.onKeyPress}
      />
    )
  }
}
