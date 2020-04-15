import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Main from './components/Main'
import './css/App.scss'
import 'normalize.css'

function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <Main />
    </BrowserRouter>
    </div>
  );
}

export default App;
