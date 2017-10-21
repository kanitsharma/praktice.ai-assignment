import React, {Component} from 'react'
import { withRouter } from 'react-router'

class Loginpage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  emailChange = e => {
    this.setState(({
      email: e.target.value
    }))
  }
  passwordChange = e => {
    this.setState(({
      password: e.target.value
    }))
  }
  login = e => {
    e.preventDefault()
    this.props.router.push({
      pathname: '/',
      state: {
        email: this.state.email,
        dialogOpen: true,
        chat: this.props.location.state
      }
    })
  }
  render() {
    return (
      <div className='loginpage'>
        <form className='login-box' onSubmit={this.login}>
          <div className='login-heading'>Welcome Back!</div>
          <input type='email' className='login-input' value={this.state.email} placeholder='Email' onChange={this.emailChange} required/>
          <input type='password' className='login-input' value={this.state.password} placeholder='Password' onChange={this.passwordChange} required />
          <input type='submit' className='login-button'/>
        </form>
      </div>
    )
  }
}

export default withRouter(Loginpage)
