import React, { Component } from 'react'
import Thead from './thead'
import Tbody from './tbody'
import Paginate from '../paginate'

export default class Table extends Component {
  constructor(props) {
    super(props)
    this.edit = this.edit.bind(this)
    this.destroy = this.destroy.bind(this)
  }

  edit() {
    console.log('action edit')
  }

  destroy() {
    console.log('action destroy')
  }

  render() {
    const {
      head,
      body,
      hasAction = true,
      edit = this.edit,
      destroy = this.destroy,
      caption,
      paginate = true,
      current,
      last,
      from,
      to,
      per,
      total,
      go,
    } = this.props
    return (
      <div>
        <table className="table table-hover table-sm table-bordered table-striped">
          {caption && 
            <caption>{caption}</caption>
          }
          <Thead 
            head={head} 
            hasAction={hasAction} 
          />
          <Tbody 
            head={head} 
            body={body} 
            hasAction={hasAction} 
            edit={edit}
            destroy={destroy}
          />
        </table>
        {paginate && body.length > 0 &&
          <Paginate
            current={current}
            last={last}
            from={from}
            to={to}
            per={per}
            total={total}
            go={go}
          />
        }
      </div>
    )
  }
}