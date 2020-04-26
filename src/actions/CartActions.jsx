
const products = [
  {
    id:1,
    name: 'Tomato asdkfj lsajfdjsjdfdsf',
    image:'https://www.bigbasket.com/media/uploads/p/l/30010383_10-bb-popular-peanutsmungaphalishengdana-raw.jpg',
    availability: true,
    quantity: 2,
    price: 30,
    marketprice: 40 
  }, 
  {
    id:2,
    name: 'Potato',
    image:'',
    availability: true,
    quantity: 2,
    price: 30,
    marketprice: 40 
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


export const delCart = (dispatch, id) =>  {
  return new Promise(resolve => {
    dispatch({ type: "DEL_CART", payload: id});
    // immulate fetch call
   });
}

export const incCart = (dispatch, id) =>  {
  return new Promise(resolve => {
    dispatch({ type: "INC_CART", payload: id});
    // immulate fetch call
   });
}


export const decCart = (dispatch, id) =>  {
  return new Promise(resolve => {
    dispatch({ type: "DEC_CART", payload: id});
    // immulate fetch call
   });
}
