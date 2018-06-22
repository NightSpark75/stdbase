'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { LocaleProvider } from 'antd'
import zhTW from 'antd/lib/locale-provider/zh_TW'
import moment from 'moment'
import 'moment/locale/zh-tw'
import '../sass/customer.css'
import 'antd/dist/antd.css'
import configureStore from './store/configureStore'
import Login from './containers/login'
import Main from './containers/main'

moment.locale('zh-tw')

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
        <LocaleProvider locale={zhTW}>
          <Router>
            <Switch>
              {login ?
                <Route path="/" component={Main} />
                :
                <Route exact path='/' component={Login} />
              }
            </Switch>
          </Router>
        </LocaleProvider>
      </Provider>
    )
  }
}

ReactDOM.render((<App />), app)