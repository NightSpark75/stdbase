import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
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
      <FormItem>
        {getFieldDecorator('userName', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
        )}
      </FormItem>
    )
  }
}
