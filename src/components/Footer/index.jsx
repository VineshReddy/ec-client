import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { footerList } from './../../stub/main.jsx';




const FooterList = () => {
  const footerlist = footerList.map (item  => (
    <section key={item.label} >
      <h5>{item.label}</h5>
      <ul>
      {
        item.subitems.map( subitem => (
          subitem.external ? (
            <li>
              <a href={subitem.url} key={subitem.label} >{subitem.label}</a>
            </li>
          ):
          (
            <li>
              <Link to={subitem.url} key={subitem.label} >{subitem.label}</Link>
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
        <i class="fab fa-facebook"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-pinterest"></i>
        <i class="fab fa-youtube"></i>
      </section>
      <section className="copyright">
         © 2019-2020, Example.com
      </section>
    </footer>
  )
} 

export default Footer 
