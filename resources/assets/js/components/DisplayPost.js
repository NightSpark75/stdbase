import React, { Component } from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';
import { Link } from 'react-router-dom';
import TableRow from './TableRow';
import MyGlobleSetting from './MyGlobleSetting';
class DisplayPost extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', posts: [] };
  }
  componentDidMount() {
    this.getPosts()
  }

  getPosts() {
    axios.get(MyGlobleSetting.url + '/api/posts')
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    const { posts } = this.state
    return (
      <div>
        <h1>Post</h1>

        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/add-item">Create Post</Link>
          </div>
        </div><br />

        <table className="table table-hover">
          <thead>
            <tr>
              <td>ID</td>
              <td>Post Title</td>
              <td>Post Content</td>
              <td width="200px">Actions</td>
            </tr>
          </thead>
          <tbody>
            {posts.map((object, index) => (
              <TableRow obj={object} key={index} get={(data) => this.setState({ posts: data })}/>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
export default DisplayPost;