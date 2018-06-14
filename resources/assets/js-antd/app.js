'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
// import { 
//   BrowserRouter as Router, 
//   Route, 
//   Switch 
// } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import configureStore from './store/configureStore'
// import Login from './containers/login'
// import Main from './containers/main'

// const store = configureStore();
// const app = document.getElementById('app')
import { LocaleProvider, DatePicker, message } from 'antd'
import zhTW from 'antd/lib/locale-provider/zh_TW'
import moment from 'moment'
import 'moment/locale/zh-tw'
import 'antd/dist/antd.css'

moment.locale('zh-tw')

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
    }
  }

  componentDidMount() {
    this.setState({ login: window.localStorage.getItem('jwt-token') })
  }

  handleChange(date) {
    message.info('Selected Date: ' + (date ? date.toString() : ''))
    this.setState({ date })
    console.log(date)
  }

  render() {
    return (
      <LocaleProvider locale={zhTW}>
        <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker onChange={value => this.handleChange(value)} />
          <div style={{ marginTop: 20 }}>Date: {this.state.date && this.state.date.toString()}</div>
        </div>
      </LocaleProvider>
    )
  }
}

ReactDOM.render((<App />), app)