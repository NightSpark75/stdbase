import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom';
import MyGlobleSetting from './MyGlobleSetting';

class TableRow extends Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let uri = MyGlobleSetting.url + `/api/posts/${this.props.obj.id}`;
    axios.delete(uri).then((response) => {
      this.props.get(response.data.data)
  })}
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.title}
          </td>
          <td>
            {this.props.obj.content}
          </td>
          <td>
          <form onSubmit={this.handleSubmit}>
            <Link to={"edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
           <input type="submit" value="Delete" className="btn btn-danger"/>        
         </form>
          </td>
        </tr>
    );
  }
}

export default withRouter(TableRow);