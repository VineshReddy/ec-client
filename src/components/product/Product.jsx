import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const Product = ({product}) => {
  return (
    <section className="product-item grid">
      <div className="product-image">
        <Link to="/">
          <img src={product.image} alt="" />
        </Link>
      </div>
      <div className="product-brand">
        <Link to="/">
        {product.brand}
        </Link>
      </div>
      <div className="product-name">
        <Link to="/">
        {product.name}
        </Link>
      </div>
      <div className="product-quantity">
        {product.quantity}
      </div>
      <div className="product-price">
        ₹{product.price}
      </div>
      <div className="addtocart">
        <i className="fas fa-cart-plus"></i>
      </div>
    </section>
  )
}

export default Product 
