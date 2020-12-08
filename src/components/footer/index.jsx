import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { footerList } from './../../data/main.jsx';




const FooterList = () => {
  const footerlist = footerList.map (item  => (
    <section key={item.label} >
      <h5>{item.label}</h5>
      <ul>
      {
        item.subitems.map( subitem => (
          subitem.external ? (
            <li  key={subitem.label}>
              <a href={subitem.url} >{subitem.label}</a>
            </li>
          ):
          (
            <li  key={subitem.label} >
              <Link to={subitem.url}  >{subitem.label}</Link>
            </li>
          )
        ))
      }
      </ul>
    </section>
  ))
  return footerlist
}

const Footer = () => {

  const scrollToTop = () => window.scrollTo(0, 0)
  return (
    <footer>
      <section className="scroll-top" onClick={scrollToTop}>
        SCROLL TO TOP
      </section>
      <section className="footer-list">
        <FooterList />
      </section>
      <section className="social-connect">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-pinterest"></i>
        <i className="fab fa-youtube"></i>
      </section>
      <section className="copyright">
         © 2019-2020, Example.com
      </section>
    </footer>
  )
} 

export default Footer 
