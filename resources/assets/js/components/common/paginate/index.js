import React, { Component } from 'react'
import Li from './li'

const setPages = (current, last) => {
  let arr = [], begin = 0, end = 0
  if (current <= 3 && current > 0) {
    begin = 1
    end = last > 5 ? 5 : last
  }
  if (current + 2 >= last && current > 3) {
    begin = last > 5 ? last - 4 : 1
    end = last
  }
  if (current > 3 && current + 2 < last) {
    begin = current - 2
    end = current + 2
  }
  if (last <= 7) {
    begin = 1
    end = last
  }
  while (begin <= end) {
    arr.push(begin)
    begin++
  }
  return arr
}

export default class Paginate extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      current,
      last,
      go,
    } = this.props
    const pages = setPages(current, last)
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <Li
            disabled={current === 1}
            text='上一頁'
            onClick={() => go(current - 1)}
          />
          {pages[0] > 1 &&
            <Li disabled={false}
              text={1}
              onClick={() => go(1)}
            />
          }
          {pages[0] > 1 &&
            <li className={'page-item disabled'}>
              <a className="page-link">...</a>
            </li>
          }
          {pages.map((object, index) => (
            <Li
              key={index}
              disabled={object === current}
              text={object}
              onClick={() => go(object)}
            />
          ))}
          {pages[pages.length - 1] < last &&
            <li className={'page-item disabled'}>
              <a className="page-link">...</a>
            </li>
          }
          {pages[pages.length - 1] < last &&
            <Li disabled={false}
              text={last}
              onClick={() => go(last)}
            />
          }
          <Li disabled={current === last}
            text='下一頁'
            onClick={() => go(current + 1)}
          />
        </ul>
      </nav>
    )
  }
}