import React from 'react'

export default class ButtonSubmit extends React.Component {

  render() {
    return (
      <button
        type="button"
        className="btn btn-primary btn-block"
        onClick={this.props.onClick}
      >
        登入
      </button>
    )
  }
}
