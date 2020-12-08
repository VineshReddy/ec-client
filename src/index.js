import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import AuthContextProvider from './contexts/AuthContext';
import CartContextProvider from './contexts/CartContext.jsx';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
      <App />
    </CartContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
