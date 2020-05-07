import React, { useState, useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from './../Loading.jsx'

import Product from './Product';

import {CartContext} from '../../contexts/CartContext';
import {addCart, delCart, incCart,  decCart} from './../../actions/CartActions.jsx';
import {getProducts} from './../../actions/ProductActions.jsx';

const ProductsList = ({productsList, setProductsList}) => {
  const {cart, dispatch} = useContext(CartContext); 

    const handleChange = (action, id) => {
    const {products} =  cart

    switch(action){
      case "add":
        const item = productsList.find(item => item.id === id)
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

  const productlist = productsList.map(item => {
    /* change _id to id */ 
    if(!item.id){
      item.id = item._id
      delete item._id
    }
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
  const { categoryName } = useParams()
  const [productsList, setProductsList] = useState(null); 

  useEffect(() => {
    let mounted = true
    getProducts(categoryName).then(res => {
      if(mounted){
        setProductsList(res.data)
      }
    })
    return () => mounted = false
  }, [])


  return (
    <main className="products">
      <h3>Products</h3>
      { 
        !productsList ? <Loading /> : 
          !productsList.length ? <div> No Products found </div> :
          <ProductsList productsList={productsList} setProductsList={setProductsList}/>
      }
    </main>
  )
}

export default Products 


{/*
  *
  *const listProducts = [ 
  *  {
  *    id: 1,
  *    name: 'Apple',
  *    image: 'https://www.bigbasket.com/media/uploads/p/l/40044731_11-bb-popular-moong-dal.jpg',
  *    productquantity: '1 * 400g',
  *    price: 40,
  *    marketprice: 40,
  *    availability: true,
  *    brand: 'Dtej'
  *  }, 
  *  {
  *    id: 2,
  *    name: 'Apple',
  *    image: 'https://www.bigbasket.com/media/uploads/p/l/40044731_11-bb-popular-moong-dal.jpg',
  *    productquantity: '1 * 400g',
  *    price: 40,
  *    marketprice: 40,
  *    availability: true,
  *    brand: 'Dtej'
  *  }, 
  *  {
  *    id: 3,
  *    name: 'Apple',
  *    image: 'https://www.bigbasket.com/media/uploads/p/l/40044731_11-bb-popular-moong-dal.jpg',
  *    productquantity: '1 * 400g',
  *    price: 40,
  *    marketprice: 40,
  *    availability: true,
  *    brand: 'Dtej'
  *  }, 
  *]
  *
  */}


