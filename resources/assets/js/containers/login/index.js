import React from 'react'
import InputAccount from '../../components/login/inputAccount'
import InputPassword from '../../components/login/inputPassword'
import ButtonSubmit from '../../components/login/buttonSubmit'
import { saveUser } from '../../lib'
import { login } from '../../api'

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
    paddingLeft: 5,
    paddingRight: 5,
    color: '#dc3545',
    fontWeight: 500,
  },
}

export default class Login extends React.Component {
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
  }

  accountChange(e) {
    this.setState({ account: e.target.value })
  }

  passwordChange(e) {
    this.setState({ password: e.target.value })
  }

  login() {
    const { account, password } = this.state
    const success = (res) => {
      let token = res.data.token
      let user = res.data.user
      saveUser(token, user)
      this.props.history.go("/");
    }
    const error = (e) => {
      this.setState({ 
        message: e.response.data,
        submiting: false,
      })
      console.log(e.response)
    }
    this.setState({ submiting: true }, () => {
      login(account, password, success, error)
    })

  }

  render() {
    return (
      <div style={styles.form}>
        <InputAccount onChange={this.accountChange} />
        <InputPassword onChange={this.passwordChange} />
        <div style={styles.messageBox}>
          {this.state.message}
        </div>
        <ButtonSubmit onClick={this.login} submiting={this.state.submiting}/>
      </div>
    )
  }
}

