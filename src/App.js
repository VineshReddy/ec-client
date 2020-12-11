import React, { useState, useContext, useEffect, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './css/App.scss'
import 'normalize.css'
import 'animate.css'
import {AuthContext} from './contexts/AuthContext.jsx' 
import { getUser } from './actions/AuthActions.jsx'
import Loading from './components/Loading.jsx'

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp.jsx')) 
const UnAuthenticatedApp = React.lazy(() => import('./UnAuthenticatedApp.jsx')) 


function App() {
  const {auth, dispatch} = useContext(AuthContext); 

  useEffect(() => {
    let mounted = true
    if(auth.token){
      dispatch({type: 'USER_LOADING'})
      getUser(auth.token).then(res => 
        dispatch({ type: 'USER_LOADED', payload: res.data})
      )
      .catch(err => 
        dispatch({ type: 'AUTH_ERROR' })
      )
    } 
    return () => mounted = false
  }, [])


  const { isAuthenticated, isLoading } = auth
  return (
  <div className="App">
    <BrowserRouter>
      <>
        <Suspense fallback={Loading} >
        { 
          isLoading ? <Loading /> :
          isAuthenticated ? <AuthenticatedApp /> : <UnAuthenticatedApp />
        }
        </Suspense>
      </>
    </BrowserRouter>
    </div>
  );
}

export default App;
