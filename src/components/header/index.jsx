import React, { useState, useEffect, useLayoutEffect, useContext } from 'react'
import { Link, useHistory} from 'react-router-dom'
import NavBar from './NavBar.jsx'

import {CartContext} from '../../contexts/CartContext';
import {getCart} from './../../actions/CartActions.jsx';



const Header = () => {
  const [size, setSize] = useState([0,0])

  const {cart, dispatch} = useContext(CartContext); 
  const {products} =  cart

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


  useEffect(() => {
    const cartIcon = document.querySelector('.fa-shopping-cart')
    cartIcon.classList.add("animate__animated","animate__swing")

    const timer = setTimeout(() => {
      cartIcon.classList.remove("animate__animated","animate__swing")
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [cart])

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
      <NavTop products={products} />
      <NavBar products={products} />
    </header>
  )
} 


const NavTop = ({products}) => {
  const [query, setQuery] = useState('')

  let history = useHistory()

  const handleSubmit = (e) => {
      e.preventDefault();
      history.push(`/query/${query}`);
  }

  return (
    <div className="navtop grid">
      <div className="logo">
        <Link to="/">
            Logo.com
        </Link>
      </div>
      <div className="search">
        <input className="searchbar" type="text" placeholder="Search.." name="search"  onChange={e => setQuery(e.target.value)} />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
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
          <span>Cart ({products.length})</span>
        </Link>
      </div>
    </div>
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
