import React from 'react'

export default class Title extends React.Component {
  render() {
    const userName = window.localStorage['user-name']
    return (
      <div style={{float: 'left', marginLeft: 15, lineHeight: '41px'}}>
        <span className="text-light">
          {'hi ~ ' + userName}
        </span>
      </div>
    )
  }
}