import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from '../../contexts/CartContext';

import {getCart, delCart, incCart,  decCart} from './../../actions/CartActions.jsx';


const Cart = () => {
  const {cart, dispatch} = useContext(CartContext); 
  const {products} =  cart

  useEffect(() => {
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

  const cartItems = products.map(product => {
  const { id, name, image, productquantity, price, marketprice, availablequantity, brand, category  } = product 
  const { quantity } = product
    return (
       <section className="cart-item" key={id}>
        <div className="product-image">
          <img src={image} alt={name + " img"}  />
        </div>
        <div className="product-info">
          <div className="product-name">
            {name}
          </div>
          <div className="product-brand">
            {brand}
          </div>
          <div className="availability">
            {
              availablequantity > 0?
                <div className="success">In Stock</div>
              :
                <div className="error">Out of Stock</div>
            }
          </div>
          <div className="product-price">
            ₹{price}
            {
            price === marketprice? null: <span className="strikethrough mrp">₹{marketprice}</span>
            }
          </div>
        </div>
        <div className="quantity">
          <i className="fas fa-minus" onClick={() => handleChange("decrease", id) } ></i>
            <span>{quantity}</span>
          <i className="fas fa-plus" onClick={() => handleChange("increase", id) }></i>
        </div>
        <div className="remove">
          <i className="fas fa-heart"></i>
          <i className="fas fa-times" onClick={() => handleChange("delete", id) }></i>
        </div>
        <div className="total">
          ₹{quantity * price}
        </div>
      </section>
      )
    }
  )
  return (
    <div className="cart-items">
      {cartItems}
      <div className="checkout">
        <Link to="/user/cart/checkout">
          <div className="button but-col">
              Checkout
          </div>
        </Link>
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
