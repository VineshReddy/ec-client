import React, { useState, useContext, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './css/App.scss'
import 'normalize.css'
import {AuthContext} from './contexts/AuthContext.jsx' 
import { getUser } from './actions/AuthActions.jsx'

const AuthenticatedApp = React.lazy(() =>
  import('./AuthenticatedApp'),
)
const UnAuthenticatedApp = React.lazy(() => 
  import('./UnAuthenticatedApp')
)


function App() {
  const {auth, dispatch} = useContext(AuthContext); 

  useEffect(() => {
    let mounted = true
    if(auth.token){
      dispatch({type: 'USER_LOADING'})
      getUser(auth.token).then(res => 
        dispatch({ type: 'USER_LOADED', payload: res.data})
      )
    } 
    return () => mounted = false
  }, [])

  return (
  <div className="App">
    <BrowserRouter>
      <React.Suspense fallback={"loading..."}>
        { auth.isAuthenticated ? <AuthenticatedApp /> : <UnAuthenticatedApp /> }
      </React.Suspense>
    </BrowserRouter>
    </div>
  );
}

export default App;
