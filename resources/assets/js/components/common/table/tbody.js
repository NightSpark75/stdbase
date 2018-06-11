import React, { Component } from 'react'
import Action from './action'

export default class Tbody extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { 
      head, 
      body, 
      hasAction,
      edit,
      destroy,
      from,
    } = this.props
    return (
      <tbody>
        {body.map((object, index) => (
          <tr key={index}>
            <td>{from + index}</td>
            {head.map((item, index) => (
              <td key={item.key}>{object[item.key]}</td>
            ))}
            {hasAction &&
              <Action edit={edit} destroy={destroy}/>
            }
          </tr>
        ))}
      </tbody>
    )
  }
}