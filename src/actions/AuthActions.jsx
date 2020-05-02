import axios from 'axios';


export const getUser = (token) => {
  return new Promise(resolve => {
    setTimeout(() => {
    axios
      .get('/api/auth/user', tokenConfig(token) )
      .then(res => 
        resolve(res)
      )
    }, 500);
  });
}

export const register = ({ name, email, password, mobile }) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify({ name, email, password, mobile });

  return new Promise(resolve => {
    axios
      .post('/api/auth/register', body, config)
      .then(res =>
        resolve(res)
      );
  })
};

// Login User
export const login = ({ email, password }) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ email, password });

  return new Promise(resolve => {
  axios
    .post('/api/auth/login', body, config)
    .then(res =>
      resolve(res)
    )
  })
}



export const tokenConfig = token => {
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};

