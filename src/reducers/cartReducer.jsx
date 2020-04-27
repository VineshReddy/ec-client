//import { GET_ITEM_CART, ADD_ITEM_CART, DELETE_ITEM_CART,  CART_LOADING } from '../actionTypes'


export default function(state, action) {
  switch (action.type) {
    case "FETCH_CART":
      return {
        ...state,
        products: {},
        loading: true
      }
    case "FETCH_CART_SUCCESS":
      return {
        ...state,
        products: action.payload,
        loading: false
      }
    case "ADD_CART":
      return {
        ...state,
        products: [action.payload, ...state.products]
      }
    case "DEL_CART":
      return {
        ...state,
        products: state.products.filter(item => item.id !== action.payload)
      }
    case "DEC_CART":
      return {
        ...state,
        products: action.payload
      }
    case "INC_CART":
      return {
        ...state,
        products: action.payload 
      }
    default:
      return state;
  }
}
