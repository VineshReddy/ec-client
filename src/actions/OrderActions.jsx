import axios from 'axios';



const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

export const getOrders = () => {
  const body = { userid : "5ea70642f27b6bf056eeebe8" };
  return new Promise(resolve => {
    setTimeout(() => {
    axios
      .post('/api/order/', body, config )
      .then(res => 
        resolve(res)
      )
    }, 500);
  });
}
 
