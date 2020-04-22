import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//import {cart} from './../../stub/dynamic';

const cart = []  

const Cart = () => {
  return (
    <main class="cart">
      <h3>Shopping Cart</h3>
      {
        cart.length  ? 
          <RenderCartItems />
          :
          <NoCartItems />
      }
    </main>
  )
} 

const RenderCartItems = () => {

  const [count, setCount] = useState(1);

  const cartItems = cart.map(item => (
       <section className="cart-item" key={item.id}>
        <div className="product-image">
          <img src={item.image}  />
        </div>
        <div className="product-info">
          <div className="product-name">
            {item.name}
          </div>
          <div className="availability">
            {
              item.availability?
                <div class="green">In Stock</div>
              :
                <div class="red">Out of Stock</div>
            }
          </div>
          <div className="product-price">
            ${item.price}
          </div>
        </div>
        <div className="quantity">
          <i class="fas fa-minus"></i>
            <span>{item.quantity}</span>
          <i class="fas fa-plus"></i>
        </div>
        <div className="remove">
          <i class="fas fa-heart"></i>
          <i class="fas fa-times"></i>
        </div>
        <div className="total">
          ${item.quantity * item.price}
        </div>
      </section>
  ))
  return (
    <div class="cart-items">
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
