import axios from 'axios';


export const getProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
    axios
      .get('/api/product/' )
      .then(res => 
        resolve(res)
      )
    }, 500);
  });
}


export const getProduct = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
    axios
      .get(`/api/product/${id}` )
      .then(res => 
        resolve(res)
      )
    }, 500);
  });
}
 
