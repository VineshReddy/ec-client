import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Product from './Product';


const products = [ {
  name: 'Apple',
  image: 'https://www.bigbasket.com/media/uploads/p/l/40044731_11-bb-popular-moong-dal.jpg',
  quantity: '1 * 400g',
  price: 40,
  brand: 'Dtej'
},
{
  name: 'Apple',
  image: 'https://www.bigbasket.com/media/uploads/p/l/40044731_11-bb-popular-moong-dal.jpg',
  quantity: '1 * 400g',
  price: 40,
  brand: 'Dtej'
},
{
  name: 'Apple',
  image: 'https://www.bigbasket.com/media/uploads/p/l/40044731_11-bb-popular-moong-dal.jpg',
  quantity: '1 * 400g',
  price: 40,
  brand: 'Dtej'
} ,
  {
  name: 'Apple',
  image: 'https://www.bigbasket.com/media/uploads/p/l/40044731_11-bb-popular-moong-dal.jpg',
  quantity: '1 * 400g',
  price: 40,
  brand: 'Dtej'
} 
]

const ProductsList = () => {
  const productlist = products.map(item => {
    return (
      <li key={item.name}>
        <Product product={item} /> 
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

