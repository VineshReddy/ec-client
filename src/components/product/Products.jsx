import React, { Component, useContext } from 'react'
import { Link } from 'react-router-dom'

import Product from './Product';

import {CartContext} from '../../contexts/CartContext';
import {addCart, delCart, incCart,  decCart} from './../../actions/CartActions.jsx';


const listProducts = [ 
  {
    id: 1,
    name: 'Apple',
    image: 'https://www.bigbasket.com/media/uploads/p/l/40044731_11-bb-popular-moong-dal.jpg',
    productquantity: '1 * 400g',
    price: 40,
    marketprice: 40,
    availability: true,
    brand: 'Dtej'
  }, 
  {
    id: 2,
    name: 'Apple',
    image: 'https://www.bigbasket.com/media/uploads/p/l/40044731_11-bb-popular-moong-dal.jpg',
    productquantity: '1 * 400g',
    price: 40,
    marketprice: 40,
    availability: true,
    brand: 'Dtej'
  }, 
  {
    id: 3,
    name: 'Apple',
    image: 'https://www.bigbasket.com/media/uploads/p/l/40044731_11-bb-popular-moong-dal.jpg',
    productquantity: '1 * 400g',
    price: 40,
    marketprice: 40,
    availability: true,
    brand: 'Dtej'
  }, 
]

const ProductsList = () => {
  const {cart, dispatch} = useContext(CartContext); 

  const handleChange = (action, id) => {
    const {products} =  cart
    switch(action){
      case "add":
        const item = listProducts.find(item => item.id == id)
        item.quantity = 1
        addCart(dispatch,item).then(data => console.log(data))
        break;
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

  const productlist = listProducts.map(item => {
    return (
      <li key={item.id}>
        <Product product={item} handleChange={handleChange} /> 
      </li>
    )
  })
  return (
    <ul className="products-list grid">
      {productlist}
    </ul>
  )
}

const Products = () => {

  return (
    <main className="products">
      <h3>Products</h3>
      <ProductsList />
    </main>
  )
}

export default Products 

