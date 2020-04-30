import React, { Component} from 'react'
import { Link } from 'react-router-dom'

import {AuthContext} from './../../contexts/AuthContext.jsx' 
import {login} from './../../actions/AuthActions.jsx'

class SignIn extends Component { 
  static contextType = AuthContext;

  state = {
    email : '',
    password : '',
    msg: null
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { name, email, password } = this.state

    const newUser = {
      email,
      password
    }
    login(newUser).then(res => 
      this.context.dispatch({ type: "LOGIN_SUCCESS", payload: res.data})
    );
  }
  render() {
    return(
      <main className="signup">
        <h3>Sign In</h3>
        <div className="signup-form grid">
          <form onSubmit={this.handleSubmit} className="grid" >
            <label htmlFor="email">Email Address : </label>
            <input type="email" name="email" placeholder="example@email.com" onChange={this.handleChange}  required />
            <label htmlFor="password">Password : </label>
            <input type="password" name="password" placeholder="password" onChange={this.handleChange}  required />
            <input type="submit" value="Login" className="button" />
          </form>
          <div className="existinguser">
            New User? <Link to="/user/signup">Sign up</Link>
          </div>
        </div>
      </main>

    )
  }


}

export default SignIn 
