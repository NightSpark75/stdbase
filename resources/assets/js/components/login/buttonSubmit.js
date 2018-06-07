import React from 'react'

export default class ButtonSubmit extends React.Component {
  render() {
    const { onClick, submiting } = this.props
    return (
      <button
        type="button"
        className="btn btn-primary btn-block"
        disabled={submiting}
        onClick={onClick}
      >
        {submiting ? '處理中...' : '登入'}
      </button>
    )
  }
}
