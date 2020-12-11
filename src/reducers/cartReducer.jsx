
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
      const productCount = state.products.filter(product => product.id == action.payload.id).length
      const productExists = state.products.map(product => product.id == action.payload.id? {...product, quantity: product.quantity + 1}: product)
      return {
        ...state,
        products: productCount == 0? [action.payload, ...state.products]: productExists
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
    case "CLEAR_CART":
      return {
        ...state,
        products: [] 
      }

    default:
      return state;
  }
}
