import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {AuthContext} from './../../contexts/AuthContext.jsx' 
import {register} from './../../actions/AuthActions.jsx'


class SignUp extends Component { 

  static contextType = AuthContext;

  state = {
    name : '',
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
    console.log(this.state)

    const newUser = {
      name,
      email,
      password
    }
    register(newUser).then(res =>
      this.context.dispatch({ type: "REGISTER_SUCCESS", payload: res.data})
    )
  }
  render() {
    return(
      <main class="signup">
        <h3>Sign Up</h3>
        <div className="signup-form grid">
          <form onSubmit={this.handleSubmit} className="grid" >
            <label htmlFor="name">Name : </label>
            <input type="text" name="name" placeholder="name" onChange={this.handleChange}  required />
            <label htmlFor="email">Email Address : </label>
            <input type="email" name="email" placeholder="example@email.com" onChange={this.handleChange}  required />
            <label htmlFor="password">Password : </label>
            <input type="password" name="password" placeholder="password" onChange={this.handleChange}  required />
            <label htmlFor="mobile">Mobile Number: </label>
            <input type="tel" name="mobile" placeholder="0123456789" onChange={this.handleChange}  required />
            <input type="submit" value="Register" className="button" />
          </form>
          <div className="existinguser">
            Existing User? <Link to="/user/signin">Sign in</Link>
          </div>
        </div>
      </main>

    )
  }


}

export default SignUp 
