import React from 'react'

const itemStyle = (index) => {
  return {
    borderLeft: index > 0 ? 2 : 0,
    marginLeft: index * 10,
    borderLeftStyle: 'solid',
    borderColor: '#003875c2',
  }
}
export default class Apps extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      active: []
    }

    this.selectApps = this.selectApps.bind(this)
  }

  selectApps(item, index) {
    let obj = this.state.active
    obj[index] = item.id
    this.setState({ active: obj }, () => this.props.resize())
    this.props.switchContent(item.path, item.component)
  }

  render() {
    const { list, index } = this.props
    return (
      <ul
        className="nav flex-column"
      >
        {list.map((item) => (
          <li
            className="nav-item"
            key={item.id}
            style={itemStyle(index)}
          >
            <button
              className="btn btn-link nav-link active"
              style={{
                color: '#003875c2',
                fontWeight: 400,
              }}
              onClick={() => this.selectApps(item, index)}
            >
              <span
                className={item.icon}
                style={{ marginRight: 5 }}
              />
              {item.name}
            </button>
            {this.state.active[index] === item.id && item.childs.length > 0 &&
              <Apps 
                list={item.childs} 
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
