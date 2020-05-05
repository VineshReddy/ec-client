
const products = [
  {
    id:1,
    name: 'Tomato asdkfj lsajfdjsjdfdsf',
    image:'https://www.bigbasket.com/media/uploads/p/l/30010383_10-bb-popular-peanutsmungaphalishengdana-raw.jpg',
    quantity: 2,
    price: 30,
    marketprice: 40,
    availability: true,
    brand: 'Dtej'
  }, 
  {
    id:2,
    name: 'Potato',
    image:'',
    quantity: 2,
    price: 30,
    marketprice: 40,
    availability: true,
    brand: 'Dtej'
  }
]

export function getCart() {
  return new Promise(resolve => {
    // immulate fetch call
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
}


export const addCart = (dispatch, id) =>  {
  return new Promise(resolve => {
    dispatch({ type: "ADD_CART", payload: id});
   });
}


export const delCart = (dispatch, id) =>  {
  return new Promise(resolve => {
    dispatch({ type: "DEL_CART", payload: id});
   });
}

export const incCart = (dispatch, id, products) =>  {
  const modifiedProducts = products.map(item => {
    if(item.id === id) 
      item.quantity++;
    return item
  })

  return new Promise(resolve => {
        dispatch({ type: "INC_CART", payload: modifiedProducts});
   });
}

export const decCart = (dispatch, id, products) =>  {
  const modifiedProducts = products.filter(item => item.id === id && item.quantity === 1 ? false : true )

    .map(item => {
    if(item.id === id) 
      item.quantity--;
    return item
  })

  return new Promise(resolve => {
        dispatch({ type: "DEC_CART", payload: modifiedProducts});
   });
}


export const clearCart = (dispatch) =>  {
  return new Promise(resolve => {
    dispatch({ type: "CLEAR_CART"});
   });
}

