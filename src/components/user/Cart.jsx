import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from '../../contexts/CartContext';

import {getCart, delCart, incCart,  decCart} from './../../actions/CartActions.jsx';


const Cart = () => {
  const {cart, dispatch} = useContext(CartContext); 
  const {products} =  cart

  useEffect(() => {
      {/*
        *dispatch({ type: "FETCH_CART" });
        *getCart().then(data => {
        *  dispatch({ type: "FETCH_CART_SUCCESS", payload: data });
        *});
        */}
  }, [])
 

  return (
    <main className="cart">
      <h3>Shopping Cart</h3>
      {
        products.length  ? 
          <RenderCartItems products={products} dispatch={dispatch}/>
          :
          <NoCartItems />
      }
    </main>
  )
} 

const RenderCartItems = ({products, dispatch}) => {

  const handleChange = (action, id) => {
    switch(action){
      case "delete":
        delCart(dispatch,id).then(data => console.log(data))
        break;
      case "increase":
        incCart(dispatch,id,products).then(data => console.log(data))
        break;
      case "decrease":
        decCart(dispatch,id,products).then(data => console.log(data))
        break;
      default:
        console.log(action)
    }
  }

  const cartItems = products.map(item => (
       <section className="cart-item" key={item.id}>
        <div className="product-image">
          <img src={item.image} alt="product-image"  />
        </div>
        <div className="product-info">
          <div className="product-name">
            {item.name}
          </div>
          <div className="availability">
            {
              item.availability?
                <div className="success">In Stock</div>
              :
                <div className="error">Out of Stock</div>
            }
          </div>
          <div className="product-price">
            MP: <span className="strikethrough">₹{item.marketprice}</span>
            &nbsp;
            ₹{item.price}
          </div>
        </div>
        <div className="quantity">
          <i className="fas fa-minus" onClick={() => handleChange("decrease", item.id) } ></i>
            <span>{item.quantity}</span>
          <i className="fas fa-plus" onClick={() => handleChange("increase", item.id) }></i>
        </div>
        <div className="remove">
          <i className="fas fa-heart"></i>
          <i className="fas fa-times" onClick={() => handleChange("delete", item.id) }></i>
        </div>
        <div className="total">
          ₹{item.quantity * item.price}
        </div>
      </section>
  ))
  return (
    <div className="cart-items">
      {cartItems}
      <div className="checkout">
        <div className="button">Checkout</div>
      </div>
    </div>
  )
}


const NoCartItems = () => {
  return (
    <section className="rem13">
      Oops! No items in your cart!!
    </section>
  )
}



export default Cart
