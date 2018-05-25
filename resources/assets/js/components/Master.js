import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import CreatePost from './CreatePost';
import DisplayPost from './DisplayPost';
import UpdatePost from './UpdatePost';

class Master extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="https://www.bear777.com">bear777.com</a>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="add-item">Create Post</Link></li>
              <li><Link to="display-item">Post List</Link></li>
            </ul>
          </div>
        </nav>
        <div>
          <Route path="/add-item" component={CreatePost} />
          <Route path="/display-item" component={DisplayPost} />
          <Route path="/edit/:id" component={UpdatePost} />
        </div>
      </div>
    )
  }
}
export default Master;