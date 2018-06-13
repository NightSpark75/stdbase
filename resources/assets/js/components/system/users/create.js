import React from 'react'

export default class Create extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }

  componentWillMount() {
    this.setState({ data: this.props.data })
  }


  render() {
    const { data, changeData } = this.props
    return (
      <div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="account">帳號</label>
            <input 
              type="account" 
              className="form-control" 
              maxLength="16" 
              id="account" 
              placeholder="ex: snake1886" 
              defaultValue={data.account}
              onChange={(e) => changeData(e, 'account')} 
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="password">密碼</label>
            <input 
            type="password" 
            className="form-control" 
            maxLength="16" 
            placeholder="0-9, a-z, A-Z" 
            defaultValue={data.password}
            onChange={(e) => changeData(e, 'password')}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="confirm">確認密碼</label>
            <input 
            type="password" 
            className="form-control" 
            maxLength="16" 
            placeholder="0-9, a-z, A-Z" 
            onChange={(e) => changeData(e, 'confirm')}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="name">名稱</label>
          <input 
          type="text" 
          className="form-control" 
          id="name" 
          placeholder="ex: Ocelot" 
          defaultValue={data.name}
          onChange={(e) => changeData(e, 'name')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input 
          type="text" 
          className="form-control" 
          id="email" 
          placeholder="ex: bigboss@fox.com" 
          defaultValue={data.email}
          onChange={(e) => changeData(e, 'email')}
          />
        </div>
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="active" />
            <label className="form-check-label" htmlFor="active">
              啟用帳號
            </label>
          </div>
        </div>
      </div>
    )
  }
}
/*
<div className="form-row">
  <div className="form-group col-md-6">
    <label htmlFor="inputEmail4">Email</label>
    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
  </div>
  <div className="form-group col-md-6">
    <label htmlFor="inputPassword4">Password</label>
    <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
  </div>
</div>
<div className="form-group">
  <label >Address</label>
  <input type="text" className="form-control" placeholder="1234 Main St" />
</div>
<div className="form-group">
  <label >Address 2</label>
  <input type="text" className="form-control" placeholder="Apartment, studio, or floor" />
</div>
*/