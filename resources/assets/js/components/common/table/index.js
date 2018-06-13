import React, { Component } from 'react'
import Thead from './thead'
import Tbody from './tbody'
import Tfoot from './tfoot'
import Paginate from '../paginate'

export default class Table extends Component {
  constructor(props) {
    super(props)
    this.edit = this.edit.bind(this)
    this.destroy = this.destroy.bind(this)
  }

  create() {
    console.log('action create')
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
      create = this.create,
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
            create={create}
          />
          <Tbody
            head={head}
            body={body}
            hasAction={hasAction}
            edit={edit}
            destroy={destroy}
            from={from}
          />
          <Tfoot
            colSpan={hasAction ? head.length + 2 : head.length + 1}
            from={from}
            to={to}
            total={total}
          />
        </table>
        {paginate && body.length > 0 &&
          <Paginate
            current={current}
            last={last}
            go={go}
          />
        }
      </div>
    )
  }
}