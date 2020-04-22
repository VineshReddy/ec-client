import React, { createContext, useReducer} from 'react'
import authReducer from './../reducers/authReducer.jsx'

export const Auth = createContext();

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null
};

const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  
  return (
    <Auth.Provider value={{state, dispatch}}>
      {props.children}
    </Auth.Provider>
  )
}

export default AuthProvider
