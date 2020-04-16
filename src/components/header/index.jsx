import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="dropdown ">
          <div className="dropdown-button button">
            <Link to="/">
              <i className="fas fa-bars"></i>
              <sub>Categories</sub>
            </Link>
          </div>
          <ul className="dropdown-content">
            <li className="button dropdown-left">
              <div className="dropdown-button">
                One
              </div>
              <ul className="dropdown-content-left">
                <li>One</li>
              </ul>
            </li>

            <li className="button dropdown-left">
              <div className="dropdown-button">
                Two
              </div>
              <ul className="dropdown-content-left">
                <li>Two</li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="button">
          <Link to="/">
            Logo.com
          </Link>
        </li>

        <li className="searchbox">
             <div className="search-container">
                <input id="searchbar" className="search-input" type="text" placeholder="Search.." name="search" />
               <button type="submit">
                <i className="fas fa-search"></i>
               </button>

            </div>
        </li>

        <li className="button">
          <Link to="/user/cart">
            <sup>10</sup>
            <i className="fas fa-shopping-cart"></i>
            <sub>Cart</sub>
          </Link>
        </li>

        <li className="button">
          <Link to="/user">
            <i className="fas fa-user-alt"></i>
            <sub>Account</sub>
          </Link>
        </li>

        <li className="button">
          <Link to="/offers">
            <i className="fas fa-gift"></i>
            <sub>Offers</sub>
          </Link>
        </li>

        <li className="button">
          <Link to="/help">
            <i className="fas fa-phone-square"></i>
            <sub>Help</sub>
          </Link>
        </li>

        <li className="button more">
          <i className="fa fa-ellipsis-v"> </i>
        </li>
      </ul>
    </nav>
  )
}

const Header = () => {
  console.log("test")
  return (
    <header> 
      <Navbar />
     </header>
  )
} 

export default Header
