import React, { Component } from 'react'

export default class Tfoot extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { colSpan, from, to, total } = this.props
    return (
      <tfoot>
        {total &&
          <tr>
            <td
              colSpan={colSpan}
              className='text-right'
            >
              {from + ' ~ ' + to + ', total: ' + total}
            </td>
          </tr>
        }
      </tfoot>
    )
  }
}