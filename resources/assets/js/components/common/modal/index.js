import React, { Component } from 'react'

export default class Modal extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      title,
      content,
      cancel,
      cancelText,
      ok,
      okText,
      okType = 'primary',
      size = '',
    } = this.props
    const modalSize = size.length > 0 ? 'modal-' + size : ''
    return (
      <div className="modal fade show" role="dialog" style={{ display: 'block', backgroundColor: '#0e0e0eba', overflowY: 'auto' }}>
        <div className={"modal-dialog modal-dialog-centered " + modalSize} role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={cancel}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" style={{ overflowY: 'auto' }}>
              {content}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={cancel}>{cancelText}</button>
              <button type="button" className={"btn btn-" + okType} onClick={ok}>{okText}</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
