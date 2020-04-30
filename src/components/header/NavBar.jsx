import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const handleClick = () => {

  }
  return (
    <>
      <CategoriesNav />
    <nav className="navbar grid">
      <div className="nav-item categories button" onClick={handleClick}>
          <div className="nav-item-content">
            <i className="fas fa-bars"></i>
            <span>Categories</span>
          </div>
      </div>
      <div className="nav-item logo button">
        <Link to="/">
          <div className="nav-item-content">
            <span>Logo.com</span>
          </div>
        </Link>
      </div>
      <div className="nav-item search ">
          <div className="nav-item-content">
              <div className="search-container">
                 <input className="searchbar" type="text" placeholder="Search.." name="search" />
                 <button type="submit">
                  <i className="fas fa-search"></i>
                 </button>
              </div>
          </div>
      </div>

      <div className="nav-item nav-account button">
        <Link to="/user">
          <div className="nav-item-content">
            <i className="fas fa-user-alt"></i>
            <span>Account</span>
          </div>
        </Link>
      </div>
      <div className="nav-item offers button">
        <Link to="/">
          <div className="nav-item-content">
            <i className="fas fa-gift"></i>
            <span>Offers</span>
          </div>
        </Link>
      </div>
      <div className="nav-item help button">
        <Link to="/">
          <div className="nav-item-content">
            <i className="fas fa-phone"></i>
            <span>Help</span>
          </div>
        </Link>
      </div>
      <div className="nav-item cart button">
        <Link to="/user/cart">
          <div className="nav-item-content">
            <i className="fa fa-shopping-cart"></i>
            <span>Cart</span>
          </div>
        </Link>
      </div>
    </nav>
    </>
  )
}

const CategoriesNav = () =>  {
  return(
    <div class="sidenav">
      <div className="sidenav-header">
        <div className="sidenav-heading flex-center">Sidenav</div>
        <div className="sidenav-close"><i class="fas fa-times fa-2x"></i></div>
      </div>
    </div>
  )
}

export default NavBar
