import React from 'react'

const itemStyle = (index) => {
  return {
    borderLeft: index > 0 ? 2 : 0,
    marginLeft: index * 10,
    borderLeftStyle: 'solid',
    borderColor: '#003875c2',
    width: '100% - ' + (index * 10) + 'px)',
  }
}

const listStyle = {
  textAlign: 'left',
  color: '#003875c2',
  fontWeight: 400,
  width: '100%',
}

const listArrow = (plus) => {
  return {
    marginRight: 5,
    float: 'right',
    position: 'relative',
    top: 5,
    color: plus ? 'rgba(53, 53, 53, 0.76)' : 'rgba(148, 148, 148, 0.76)',
  }
}

export default class Apps extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      active: [],
    }
    this.selectApps = this.selectApps.bind(this)
  }

  componentDidMount() {
    if(window.localStorage['apps-active']) {
      const active = JSON.parse(window.localStorage['apps-active'])
      this.setState({ active: active })
    }
  }

  selectApps(item, index) {
    let active = this.state.active
    if (active.length === 0 || active[index] !== item.id) {
      active[index] = item.id
    } else {
      delete active[index]
    }
    this.setState({ active: active }, () => {
      this.props.resize()
      window.localStorage['apps-active'] = JSON.stringify(active)
    })
    this.props.switchContent(item.path)
  }

  render() {
    const { list, index } = this.props
    return (
      <ul
        className="nav flex-column"
        style={{ width: '100%' }}
      >
        {list.map((item) => (
          <li
            className="nav-item"
            key={item.id}
            style={itemStyle(index)}
          >
            <a
              className="btn btn-link nav-link"
              style={listStyle}
              onClick={() => this.selectApps(item, index)}
            >
              <span
                className={item.icon}
                style={{ marginRight: 5 }}
              />
              {item.name}
              {item.children.length > 0 && this.state.active[index] === item.id &&
                <span className="fas fa-minus" style={listArrow(false)} />
              }
              {item.children.length > 0 && this.state.active[index] !== item.id &&
                <span className="fas fa-plus" style={listArrow(true)} />
              }
            </a>
            {item.children.length > 0 && this.state.active[index] === item.id &&
              <Apps
                list={item.children}
                index={index + 1}
                switchContent={this.props.switchContent}
                resize={this.props.resize}
              />
            }
          </li>
        ))}
      </ul>
    )
  }
}
