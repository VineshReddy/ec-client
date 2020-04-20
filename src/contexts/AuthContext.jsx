import React, { createContext, useReducer} from 'react'
import authReducer from './../reducers/authReducer.jsx'

export const AuthContext = createContext();

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null
};

const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  
  return (
    <AuthContext.Provider value={{state, dispatch}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
