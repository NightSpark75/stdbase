import React from 'react'
import InputAccount from '../../components/login/inputAccount'
import InputPassword from '../../components/login/inputPassword'
import ButtonSubmit from '../../components/login/buttonSubmit'
import { saveToken } from '../../lib'

const styles = {
  form: {
    margin: 'auto',
    padding: 10,
    marginTop: 200,
    border: '0.5 solid',
    width: 400,
    height: 280,
    backgroundColor: 'rgb(232, 230, 230)',
    borderRadius: 4,
  },
  messageBox: {
    height: 24,
    marginBottom: 16,
  },
}

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: '',
      password: '',
    }
    this.accountChange = this.accountChange.bind(this)
    this.passwordChange = this.passwordChange.bind(this)
    this.login = this.login.bind(this)
  }

  accountChange(e) {
    this.setState({ userId: e.target.value })
  }

  passwordChange(e) {
    this.setState({ password: e.target.value })
  }

  login() {
    const token = '123456789'
    saveToken(token)
    this.props.history.go("/");
  }

  render() {
    return (
      <div style={styles.form}>
        <InputAccount onChange={this.accountChange} />
        <InputPassword onChange={this.passwordChange} />
        <div style={styles.messageBox}>
        </div>
        <ButtonSubmit onClick={this.login} />
      </div>
    )
  }
}

