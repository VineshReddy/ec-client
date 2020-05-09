
export const tokenConfig = () => {
  let config = {
    headers: {
      'Content-type': 'application/json'  
    }
  };

  // If token, add to headers
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};

