
const initialState = {
  products: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCT':
      return {
        products: [action.payload],
        loading: false
      }
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        loading: false
      }
    case 'PRODUCTS_LOADING':
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
