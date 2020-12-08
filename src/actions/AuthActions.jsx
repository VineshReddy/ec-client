import axios from 'axios';
import {tokenConfig} from './../utilities/tokenconfig.jsx'

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

export const getUser = () => {
  return new Promise((resolve, reject)=> {
    axios
      .get('/api/auth/user', tokenConfig() )
      .then(res => 
        resolve(res)
      ).catch(err => reject(err.response.data))
  });
}

export const register = ({ name, email, password, mobile }) => {
  const body = JSON.stringify({ name, email, password, mobile });

  return new Promise((resolve, reject) => {
    axios
      .post('/api/auth/register', body, config)
      .then(res =>
        resolve(res)
      ).catch(err => reject(err.response.data))
  })
};

export const login = ({ email, password }) => {
  const body = JSON.stringify({ email, password });

  return new Promise((resolve, reject) => {
  axios
    .post('/api/auth/login', body, config)
    .then(res =>
      resolve(res)
    ).catch(err => reject(err.response.data))
  })
}



