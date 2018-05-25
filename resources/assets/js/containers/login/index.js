import React from 'react'
import { saveToken } from '../../lib'

const styles = {
  content: {
    
  },
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
  button: {
    marginTop: 0,
  },
}

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: '',
      password: '',
    }
    this.login = this.login.bind(this)
  }

  login() {
    const token = '123456789'
    saveToken(token)
    this.props.history.go("/");
  }

  render() {
    return (
      <div style={styles.content}>
        <div style={styles.form}>
          <div className="form-group">
            <label htmlFor="userId">帳號</label>
            <input
              type="text"
              className="form-control"
              id="userId"
              placeholder="輸入帳號"
              maxLength="20"
              defaultValue={this.state.userId}
              onChange={this.userIdChange}
              onChange={(e) => { this.setState({ userId: e.target.value }) }}
            />
            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
          </div>
          <div className="form-group">
            <label htmlFor="password">密碼</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="輸入密碼"
              maxLength="20"
              defaultValue={this.state.password}
              onChange={(e) => { this.setState({ password: e.target.value }) }}
            />
            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
          </div>
          <div style={styles.messageBox}>

          </div>
          <button
            type="button"
            className="btn btn-primary btn-block"
            style={styles.button}
            onClick={this.login}
          >
            登入
          </button>
        </div>
      </div>
    )
  }
}

