import React from 'react'

const list = [
  {id: 1, text: 'Layout', active: false, icon: 'fas fa-edit', child: [
    {id: 11, text: 'Overview', active: false, icon: 'fas fa-pen-square', path: 'page2', child: [], classPath: 'page2'},
    {id: 12, text: 'Grid', active: false, icon: 'fas fa-pen-square', path: 'page1', child: [], classPath: 'page1'},
    {id: 13, text: 'Media object', active: false, icon: 'fas fa-pen-square', path: 'page3', child: [], classPath: 'page3'},
    {id: 14, text: 'Utilities for layout', active: false, icon: 'fas fa-pen-square', path: 'page2', child: [], classPath: 'page2'},
  ]},
  {id: 2, text: 'Content', active: false, icon: 'fas fa-camera-retro', path: 'page1', child: [
    {id: 21, text: 'Reboot', active: false, icon: 'fas fa-pen-square', path: 'page3', child: [], classPath: 'page1'},
    {id: 22, text: 'Typography', active: false, icon: 'fas fa-pen-square', path: 'page2', child: [], classPath: 'page1'},
    {id: 23, text: 'Code', active: false, icon: 'fas fa-pen-square', path: 'page1', child: [], classPath: 'page1'},
    {id: 24, text: 'Images', active: false, icon: 'fas fa-pen-square', child: [
      {id: 241, text: 'Tables', active: false, icon: 'fas fa-print', path: 'page1', child: [], classPath: 'page2'},
      {id: 242, text: 'Figures', active: false, icon: 'fas fa-print', path: 'page2', child: [], classPath: 'page3'},
      {id: 243, text: 'Borders', active: false, icon: 'fas fa-print', path: 'page3', child: [], classPath: 'page3'},
      {id: 244, text: 'Clearfix', active: false, icon: 'fas fa-print', path: 'page1', child: [], classPath: 'page1'},
    ]},
  ]},
  {id: 3, text: 'Close Icon', active: false, icon: 'fas fa-edit', child: [
    {id: 31, text: 'Colors', active: false, icon: 'fas fa-pen-square', path: 'page2', child: [], classPath: 'page1'},
    {id: 32, text: 'Display', active: false, icon: 'fas fa-pen-square', path: 'page3', child: [], classPath: 'page3'},
    {id: 33, text: 'Embed', active: false, icon: 'fas fa-pen-square', path: 'page1', child: [], classPath: 'page2'},
    {id: 34, text: 'Flex', active: false, icon: 'fas fa-pen-square', path: 'page2', child: [], classPath: 'page1'},
  ]},
  {id: 4, text: 'Position', active: false, icon: 'fas fa-edit', child: [
    {id: 41, text: 'Shadows', active: false, icon: 'fas fa-pen-square', path: 'page3', child: [], classPath: 'page3'},
    {id: 42, text: 'Sizing', active: false, icon: 'fas fa-pen-square', path: 'page1', child: [], classPath: 'page2'},
    {id: 43, text: 'Spacing', active: false, icon: 'fas fa-pen-square', path: 'page2', child: [], classPath: 'page1'},
    {id: 44, text: 'Text', active: false, icon: 'fas fa-pen-square', child: [
      {id: 441, text: 'Badge', active: false, icon: 'fas fa-print', path: 'page3', child: []},
      {id: 442, text: 'Buttons', active: false, icon: 'fas fa-print', path: 'page1', child: [], classPath: 'page1'},
      {id: 443, text: 'Inputs', active: false, icon: 'fas fa-print', path: 'page2', child: [], classPath: 'page3'},
      {id: 444, text: 'Modal', active: false, icon: 'fas fa-print', path: 'page3', child: [], classPath: 'page2'},
    ]},
  ]},
]

export default class Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      active: {},
      height: 'calc(100vh - 48px)',
      wapperHeight: null,
    }

    this.flexHeight = this.flexHeight.bind(this)
  }

  componentDidMount() {
    this.setState({wapperHeight: this.refs.wapper.clientHeight})
  }

  flexHeight() {
    const { wapperHeight } = this.state
    let height = this.refs.ulid_0 ? this.refs.ulid_0.clientHeight: 'calc(100vh - 48px)'
    this.setState({height: height > wapperHeight? height: 'calc(100vh - 48px)'})
  }

  menuItems(list, n = 0) {
    return (
      <ul 
        className="nav flex-column" 
        ref={'ulid_' + n}
      >
        {list.map((item) => (
          <li 
            className="nav-item" 
            key={item.id}
            style={{
              borderLeft: n > 0? 2: 0,
              marginLeft: n * 10, 
              borderLeftStyle: 'solid',
              borderColor: '#003875c2',
            }}
          >
            <button 
              className="btn btn-link nav-link active" 
              style={{
                color: '#003875c2',
                fontWeight: 400,
              }}
              onClick={() => {
                let obj = this.state.active
                obj[n] = item.id 
                this.setState({active: obj}, () => this.flexHeight())
                this.props.switchContent(item.path, item.classPath)
              }}
            >
              <span 
                className={item.icon}
                style={{marginRight: 5}}
              />
              {item.text}
            </button>
            {this.state.active[n] === item.id && item.child.length > 0 && 
              this.menuItems(item.child, n + 1)
            }
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <nav 
        className="col-sm-3 col-md-3 col-lg-2 col-xl-2 d-none d-md-block bg-light sidebar border-right" 
        style={{
          padding: '48px 0 0'
        }}
      >
        <div 
          style={{height: this.state.height}}
          ref="wapper"
        >
          {this.menuItems(list)}
        </div>
      </nav>
    )
  }
}