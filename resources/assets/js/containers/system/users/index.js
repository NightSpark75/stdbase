import React from 'react'
import { getUsers } from '../../../api'
import Rows from './rows'

export default class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers() {
    const success = (res) => {
      this.setState({ users: res.data })
    }
    const error = (err) => {
      console.log(err)
    }
    getUsers(success, error)
  }

  render() {
    const { users } = this.state
    return (
      <div>
        <h1>User</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <td>ID</td>
              <td>account</td>
              <td>user name</td>
              <td width="200px">Actions</td>
            </tr>
          </thead>
          <tbody>
            {users.map((object, index) => (
              <Rows obj={object} key={index}/>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}