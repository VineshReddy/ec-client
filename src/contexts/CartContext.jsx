import React, { createContext, useReducer} from 'react'
import cartReducer from './../reducers/cartReducer.jsx'

export const CartContext = createContext();

const initialState = {
};

const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  return (
    <CartContext.Provider value={{state, dispatch}}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
