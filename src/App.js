import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Main from './components/Main'
import './css/App.scss'
import 'normalize.css'

import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
  <div className="App">
    <AuthContextProvider>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </AuthContextProvider>
    </div>
  );
}

export default App;
