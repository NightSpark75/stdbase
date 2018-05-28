'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Login from './containers/login'
import Main from './containers/main'

const store = configureStore();
const app = document.getElementById('app')

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: false,
    }
  }

  componentDidMount() {
    this.setState({ login: window.localStorage.getItem('jwt-token') })
  }

  render() {
    const { login } = this.state
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {login ?
              <Route path="/" component={Main} />
              :
              <Route exact path='/' component={Login} />
            }
          </Switch>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render((<App />), app)