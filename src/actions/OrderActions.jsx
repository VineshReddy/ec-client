import axios from 'axios';
import {tokenConfig} from './../utilities/tokenconfig.jsx'

export const getOrders = () => {
  return new Promise(resolve => {
    setTimeout(() => {
    axios
      .get('/api/order/', tokenConfig())
      .then(res => 
        resolve(res)
      )
    }, 500);
  });
}


export const placeOrder = (products, addressid) => {
  const body = { products, addressid };
  return new Promise(resolve => {
    setTimeout(() => {
    axios
      .post('/api/order/placeorder', body, tokenConfig())
      .then(res => 
        resolve(res)
      )
    }, 500);
  });
}
 
