import React from 'react'
import { Form, Icon, Input, Button, Checkbox, Modal } from 'antd';
import { saveUser } from '../../lib'
import { login } from '../../api'

const FormItem = Form.Item;

const styles = {
  form: {
    margin: 'auto',
    padding: 10,
    marginTop: 200,
    border: '0.5 solid',
    width: 300,
    //height: 280,
    backgroundColor: 'rgb(232, 230, 230)',
    borderRadius: 4,
  },
  messageBox: {
    height: 24,
    marginBottom: 16,
    paddingLeft: 5,
    paddingRight: 5,
    color: '#dc3545',
    fontWeight: 500,
  },
}

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      password: '',
      message: '',
      submiting: false,
    }
    this.accountChange = this.accountChange.bind(this)
    this.passwordChange = this.passwordChange.bind(this)
    this.login = this.login.bind(this)
    this.keyPress = this.keyPress.bind(this)
  }

  accountChange(e) {
    this.setState({ account: e.target.value })
  }

  passwordChange(e) {
    this.setState({ password: e.target.value })
  }

  keyPress(target) {
    if (target.charCode == 13) {
      this.login()
    }
  }

  errorMessage(message) {
    Modal.error({
      title: '帳號驗證錯誤',
      content: message,
    });
  }

  login() {
    const { account, password } = this.state
    if (account === '') {
      this.setState({ message: '請輸入帳號' })
      return
    }
    if (password === '') {
      this.setState({ message: '請輸入密碼' })
      return
    }
    const success = (res) => {
      let token = res.data.token
      let user = res.data.user
      saveUser(token, user)
      this.props.history.go("/");
    }
    const error = (e) => {
      this.setState({ submiting: false })
      this.errorMessage(e.response.data)
      console.log(e.response)
    }
    this.setState({ submiting: true }, () => {
      login(account, password, success, error)
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="login-form" style={styles.form}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '請輸入帳號!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="帳號"
              onChange={this.accountChange}
              onKeyPress={this.keyPress}
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '請輸入密碼!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密碼"
              onChange={this.passwordChange}
              onKeyPress={this.keyPress}
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>記住帳號</Checkbox>
          )}
          <a className="login-form-forgot" href="" style={{ float: 'right' }}>忘記密碼</a>
          {!this.state.submiting &&
            <Button type="primary" className="login-form-button" onClick={this.login} style={{ width: '100%' }}>
              登入
            </Button>
          }
          {this.state.submiting &&
            <Button type="primary" loading style={{ width: '100%' }}>
              驗證中
            </Button>
          }
        </FormItem>
      </div>
    )
  }
}

const LoginForm = Form.create()(Login)
export default LoginForm

