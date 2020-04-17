import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Product from './Product';


const Products = () => {
  return (
    <main className="products">
      <h3>Products</h3>
      <ul className="products-list grid">
        <li>
          <Product/>
        </li>
        <li>
          <Product/>
        </li>
        <li>
          <Product/>
        </li>
      </ul>
    </main>
  )
}

export default Products 
