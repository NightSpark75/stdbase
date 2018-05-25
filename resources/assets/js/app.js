'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom'
import Login from './containers/login'
import Main from './containers/main'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: false,
    }
  }

  componentDidMount() {
    this.setState({ login: window.localStorage["jwt-token"] })
  }

  render() {
    const { login } = this.state
    return (
      <Router>
        <Switch>
          {login ?
            <Route path="/" component={Main} />
            :
            <Route exact path='/' component={Login} />
          }
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render((<App />), document.getElementById('app'))