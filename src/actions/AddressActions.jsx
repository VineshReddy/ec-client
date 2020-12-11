import axios from 'axios';
import {tokenConfig} from './../utilities/tokenconfig.jsx'


export const getAddresses = () => {
  return new Promise(resolve => {
    setTimeout(() => {
    axios
      .get('/api/address/', tokenConfig())
      .then(res => 
        resolve(res)
      )
    }, 500);
  });
}
 
export const createAddress = (newAddress) => {
  const body = { ...newAddress }
  return new Promise(resolve => {
    setTimeout(() => {
    axios
      .post('/api/address/', body, tokenConfig())
      .then(res => 
        resolve(res)
      )
    }, 500);
  });
}

export const makeDefault = (id) => {
  const body = { id }
  return new Promise(resolve => {
    setTimeout(() => {
      axios.post('/api/address/makedefault', body, tokenConfig())
        .then(res=>
          resolve(res)
        )
    }, 500)
  }) 
}
 
