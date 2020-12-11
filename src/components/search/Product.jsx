import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const Product = ({product, handleChange}) => {
  const { id, name, image, productquantity, price, marketprice, availablequantity, brand, category  } = product 
  return (
    <section className="product-item grid">
      <div className="product-image">
        <Link to="/">
          <img src={image} alt="" />
        </Link>
      </div>
      <div className="product-brand">
        <Link to="/">
        {brand}
        </Link>
      </div>
      <div className="product-name">
        <Link to="/">
        {name}
        </Link>
      </div>
      <div className="product-quantity">
        {productquantity}
      </div>
      <div className="product-price">
        ₹{price}
        {
          price === marketprice? null: <span className="strikethrough mrp">₹{marketprice}</span>
        }
      </div>
      <div className="addtocart" onClick={() => handleChange("add", id) } >
        <div className="flex-center">
          Add
          <i className="fas fa-shopping-cart" ></i>
        </div>
      </div>
    </section>
  )
}

export default Product 
