import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import {AuthContext} from './../../contexts/AuthContext.jsx' 
import {register} from './../../actions/AuthActions.jsx'


class SignUp extends Component { 

  static contextType = AuthContext;

  state = {
    name : '',
    email : '',
    password : '',
    mobile: '',
    msg: null
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { name, email, password, mobile } = this.state

    const newUser = {
      name,
      email,
      password,
      mobile
    }
    register(newUser).then(res => {
      this.context.dispatch({ type: "REGISTER_SUCCESS", payload: res.data})
      this.props.history.goBack()
      }
    )
      .catch(err => this.setState(state => ({ msg: err.msg })))
  }
  render() {
    return(
      <main className="signup">
        <h3>Sign Up</h3>
        <div className="signup-form grid">
          <form onSubmit={this.handleSubmit} className="grid" >
            {
              this.state.msg?  <label className="error">{this.state.msg}</label> : null
            }
            <label htmlFor="name">Name : </label>
            <input type="text" name="name" placeholder="name" onChange={this.handleChange}  required />
            <label htmlFor="email">Email Address : </label>
            <input type="email" name="email" placeholder="example@email.com" onChange={this.handleChange}  required />
            <label htmlFor="password">Password : </label>
            <input type="password" name="password" placeholder="password" onChange={this.handleChange}  required />
            <label htmlFor="mobile">Mobile Number: </label>
            <input type="tel" name="mobile" placeholder="0123456789" onChange={this.handleChange}  required />
            <input type="submit" value="Register" className="button but-col" />
          </form>
          <div className="existinguser">
            Existing User? <Link to="/user/signin">Sign in</Link>
          </div>
        </div>
      </main>

    )
  }


}

export default withRouter(SignUp) 
