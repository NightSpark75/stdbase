import React from 'react'
import { connect } from 'react-redux'
import { Menu } from 'antd'
import { setOpenKey, setSelectedKey } from '../../reducers/base/baseAction'

const SubMenu = Menu.SubMenu

class Apps extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.menuList = this.menuList.bind(this)
    this.onOpenChange = this.onOpenChange.bind(this)
    this.onSelect = this.onSelect.bind(this)
  }

  onOpenChange(key) {
    this.props.dispatch(setOpenKey(key))
    window.localStorage['menuOpenKey'] = key
  }

  onSelect(obj) {
    this.props.dispatch(setSelectedKey(obj.selectedKeys))
    window.localStorage['menuSelectKey'] = obj.selectedKeys
  }

  menuList(list, change) {
    return (
      list.map((object) => (
        object.children.length > 0 ?
          <SubMenu 
            key={object.id} 
            title={menuTitle(object.icon, object.name)}
          >
            {this.menuList(object.children, change)}
          </SubMenu>
        :
          <Menu.Item 
            key={object.id} 
            onClick={() => this.props.switchContent(object.path)}
          >
            {object.name}
          </Menu.Item>
      ))
    )
  }

  render() {
    const { list } = this.props
    return (
      <Menu 
        style={{ height: this.props.height }} 
        mode="inline"
        forceSubMenuRender={true}
        openKeys={this.props.base.openKey}
        selectedKeys={this.props.base.selectedKey}
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
      <span>{text}</span>  
    </span>
  )
}

function mapStateToProps(state) {
  const { base } = state
  return { base }
}

export default connect(mapStateToProps)(Apps)