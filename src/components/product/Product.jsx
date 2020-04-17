import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const Product = () => {
  return (
    <section className="product-item grid">
      <div className="product-image">
        <img src="https://www.bigbasket.com/media/uploads/p/l/40044731_11-bb-popular-moong-dal.jpg" alt="" />
      </div>
      <div className="product-brand">
        Aashirwad
      </div>
      <div className="product-type">
        Wheat
      </div>
      <div className="product-quantity">
        1 * 300g
      </div>
      <div className="product-price">
        $400
      </div>
      <div className="addtocart">
        <i className="fas fa-cart-plus"></i>
      </div>
    </section>
  )
}

export default Product 
