import axios from 'axios';


export const getProducts = (categoryName) => {
  return new Promise(resolve => {
    setTimeout(() => {
    const body = {categoryName} 
    axios
      .post('/api/product/', body )
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
 
