import axios from 'axios';



const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

export const getAddresses = () => {
  const body = { userid : "5ea70642f27b6bf056eeebe8" };
  return new Promise(resolve => {
    setTimeout(() => {
    axios
      .get('/api/address/', body, config )
      .then(res => 
        resolve(res)
      )
    }, 500);
  });
}
 
