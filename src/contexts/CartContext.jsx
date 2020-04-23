import React, { createContext, useReducer} from 'react'
import cartReducer from './../reducers/cartReducer.jsx'

export const CartContext = createContext();

const initialState = 
{
  products : [
    {
      id:1,
      name: 'Tomato asdkfj lsajfdjsjdfdsf',
      image:'https://www.bigbasket.com/media/uploads/p/l/30010383_10-bb-popular-peanutsmungaphalishengdana-raw.jpg',
      availability: true,
      quantity: 2,
      price: 30,
    }, 
    {
      id:2,
      name: 'Potato',
      image:'',
      availability: true,
      quantity: 2,
      price: 30,
    }
  ],
  loading : false
}


const CartContextProvider = (props) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  
  return (
    <CartContext.Provider value={{cart, dispatch}}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
