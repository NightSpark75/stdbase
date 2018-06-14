import React from 'react'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

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
    this.state = { }
    this.selectApps = this.selectApps.bind(this)
    this.menuList = this.menuList.bind(this)
    this.onOpenChange = this.onOpenChange.bind(this)
    this.onSelect = this.onSelect.bind(this)
  }

  componentDidMount() {
    
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

  onOpenChange(key) {
    localStorage['menuOpenKey'] = key
  }

  onSelect(obj) {
    localStorage['menuSelectKey'] = obj.key
  }

  menuList(list, change) {
    return (
      list.map((object) => (
        object.children.length > 0 ? //&& active[index] === object.id ?
          <SubMenu 
            key={object.id} 
            title={menuTitle(object.icon, object.name)}
          >
            {this.menuList(object.children, change)}
          </SubMenu>
        :
          <Menu.Item 
            key={object.id} 
            onClick={() => this.props.switchContent(object.path, object.text, [])}
          >
            {object.name}
          </Menu.Item>
      ))
    )
  }

  render() {
    const { list } = this.props
    let openKey = window.localStorage['menuOpenKey'] ? [window.localStorage['menuOpenKey']] : []
    let selectedKey = window.localStorage['menuSelectKey'] ? [window.localStorage['menuSelectKey']] : []
    return (
      <Menu 
        style={{ height: this.props.height }} 
        mode="inline"
        defaultOpenKeys={openKey}
        defaultSelectedKeys={selectedKey}
        onOpenChange={this.onOpenChange}
        onSelect={this.onSelect}
      >
        {this.menuList(list, this.props.switchContent)}
      </Menu>
    )
  }
}

function menuTitle(icon, text) {
  return (
    <span>
      <span className={icon} />
      {/* <Icon type={icon} /> */}
      <span>{text}</span>  
    </span>
  )
}