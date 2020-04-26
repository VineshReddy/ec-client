import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [size, setSize] = useState([0,0])

  useEffect(() => {
    const navTop = document.querySelector(".navtop")
    const navbar = document.querySelector(".navbar")

    const navTopOptions = {
    }

    const navTopObserver = new IntersectionObserver((entries, navTopObserver) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          navbar.classList.add("navtop-scrolled")
        } else {
          navbar.classList.remove("navtop-scrolled")
        }
      });
    }, navTopOptions)
    navTopObserver.observe(navTop)
  }, [])

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <header> 
      <NavTop />
      <Navbar />
    </header>
  )
} 


const NavTop = () => {
  return (
    <div className="navtop grid">
      <div className="logo">
        <Link to="/">
            Logo.com
        </Link>
      </div>
      <div className="search">
         <input className="searchbar" type="text" placeholder="Search.." name="search" />
         <button type="submit">
          <i className="fas fa-search"></i>
         </button>
      </div>
      <div className="nav-account">
        <Link to="/user">
          <i className="fas fa-user-alt"></i>
          <span>Account</span>
        </Link>
      </div>
      <div className="cart">
        <Link to="/user/cart">
          <i className="fas fa-shopping-cart"></i>
          <span>Cart</span>
        </Link>
      </div>
    </div>
  )
}
const Navbar = () => {
  return (
    <nav className="navbar grid">
      <div className="nav-item categories button">
        <Link to="/">
          <div className="nav-item-content">
            <i className="fas fa-bars"></i>
            <span>Categories</span>
          </div>
        </Link>
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
  )
}



export default Header



{/*
  *  <ul className="grid">
  *        <li className="categories">
  *          <div className="dropdown-button button">
  *            <Link to="/">
  *              <i className="fas fa-bars"></i>
  *              <div>Categories</div>
  *            </Link>
  *          </div>
  *          <ul className="dropdown-content">
  *            <li className="dropdown-left">
  *              <div className="dropdown-button">
  *                One
  *              </div>
  *              <ul className="dropdown-content-left">
  *                <li>One</li>
  *              </ul>
  *            </li>
  *
  *            <li className="dropdown-left">
  *              <div className="dropdown-button">
  *                Two
  *              </div>
  *              <ul className="dropdown-content-left">
  *                <li>Two</li>
  *              </ul>
  *            </li>
  *          </ul>
  *        </li>
  *        <li className="search">
  *          <div className="search-container">
  *              <input className="searchbar" type="text" placeholder="Search.." name="search" />
  *             <button type="submit">
  *              <i className="fas fa-search"></i>
  *             </button>
  *          </div>
  *        </li>
  *
  *
  *        <li className="button nav-account">
  *          <i className="fa fa-user-alt"></i>
  *          <sub>Account</sub>
  *        </li>
  *        <li className="button cart">
  *          <i className="fa fa-cart"> </i>
  *          <sub>Cart</sub>
  *        </li>
  *        <li className="button offers">
  *          <i className="fa fa-gift"> </i>
  *          <sub>Offers</sub>
  *        </li>
  *        <li className="button offers">
  *          <i className="fa fa-phone"> </i>
  *          <sub>Help</sub>
  *        </li>
  *        <li className="button more">
  *          <i className="fa fa-ellipsis-v"> </i>
  *          <sub>More</sub>
  *        </li>
  *      </ul>
  *
  */}
