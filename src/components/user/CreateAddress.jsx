import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import {AuthContext} from './../../contexts/AuthContext.jsx' 
import {createAddress} from './../../actions/AddressActions.jsx'


class CreateAddress extends Component { 

  static contextType = AuthContext;

  state = {
    name : '',
    mobile: '',
    pincode: '',
    landmark: '',
    address: '',
    isdefault: false, 
    msg: null
  }
  handleChange = (e) => {
    if(e.target.name === 'isdefault'){
      this.setState({
        [e.target.name] : !this.state.isdefault 
      })
    } 
    else {
      this.setState({
        [e.target.name] : e.target.value
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { name, mobile, pincode, landmark, address, isdefault } = this.state

    const newAddress = {
      name,
      mobile,
      pincode,
      landmark,
      address,
      isdefault
    }
    createAddress(newAddress).then(res => {
      this.props.history.goBack()
      }
    )
  }
  render() {
    const { name, mobile, pincode, landmark, address, isdefault } = this.state
    return(
      <main className="signup">
        <h3>Create Address</h3>
        <div className="signup-form grid">
          <form onSubmit={this.handleSubmit} className="grid" >
            <label htmlFor="name">Name : </label>
            <input type="text" name="name" placeholder="name" onChange={this.handleChange}  required />
            <label htmlFor="mobile">Mobile Number: </label>
            <input type="tel" name="mobile" placeholder="0123456789" onChange={this.handleChange}  required />
            <label htmlFor="pincode">Pincode: </label>
            <input type="tel" name="pincode" placeholder="506001" onChange={this.handleChange}  required />
            <label htmlFor="landmark">Landmark: </label>
            <input type="text" name="landmark" placeholder="" onChange={this.handleChange}  required />
            <label htmlFor="address">Address: </label>
            <input type="text" name="address" placeholder="" onChange={this.handleChange}  required />
              <label htmlFor="isdefault">Default: &nbsp;               
                  <input type="checkbox"  name="isdefault" onChange={this.handleChange} />
              </label>
            <input type="submit" value="Create Address" className="button but-col" />

          </form>
        </div>
      </main>

    )
  }


}

export default withRouter(CreateAddress) 
