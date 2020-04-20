import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Account = () => {
  return (
    <main className="account">
      <h3>Account Information</h3>
      <div className="account-items">
      <Link to="/user/profile">
        <div className="account-image">
          <i class="fas fa-id-badge" style={{color:"peru"}} ></i>
        </div>
        <div className="account-title">
          Profile 
        </div>
        <div className="account-description">
          Modify profile details
        </div>
      </Link>

      <Link to="/user/orders">
        <div className="account-image">
          <i class="fas fa-box-open" style={{color:"goldenrod"}} ></i>
        </div>
        <div className="account-title">
          Orders
        </div>
        <div className="account-description">
          Order history
        </div>
      </Link>
      <Link to="/user/addresses">
        <div className="account-image">
          <i class="fas fa-map-marked" style={{color:"cornflowerblue"}} ></i>
        </div>
        <div className="account-title">
          Manage Addresses
        </div>
        <div className="account-description">
          Add, delete or modify address
        </div>
      </Link>
      <Link to="/user/balance">
        <div className="account-image">
          <i class="fas fa-rupee-sign" style={{color:"olive"}} ></i>
        </div>
        <div className="account-title">
          Balance 
        </div>
        <div className="account-description">
          Add or check balance summary
        </div>
      </Link>
      </div>
    </main>
  )
}

export default Account
