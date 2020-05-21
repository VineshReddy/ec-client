import axios from 'axios';
import {tokenConfig} from './../utilities/tokenconfig.jsx'

export const getOrders = () => {
  return new Promise(resolve => {
    axios
      .get('/api/order/', tokenConfig())
      .then(res => 
        resolve(res)
      ).catch(err => console.log(err.response.data))
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
 
