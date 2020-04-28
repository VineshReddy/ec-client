import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const Product = ({product, handleChange}) => {

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
        {product.productquantity}
      </div>
      <div className="product-price">
       <span className="strikethrough">₹{product.marketprice}</span>
        &nbsp;
        ₹{product.price}
      </div>
      <div className="addtocart" onClick={() => handleChange("add", product.id) } >
        <div className="flex-center">
          Add
          <i className="fas fa-shopping-cart" ></i>
        </div>
      </div>
    </section>
  )
}

export default Product 
