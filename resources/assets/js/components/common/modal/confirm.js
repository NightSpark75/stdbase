import React, { Component } from 'react'

export default class Confirm extends Component {
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
      okType = 'primary'
    } = this.props
    return (
      <div className="modal" role="dialog" style={{display: 'block', backgroundColor: '#0e0e0eba' }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={cancel}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
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