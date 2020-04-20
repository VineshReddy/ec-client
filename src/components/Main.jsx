import React, { Component } from 'react'
import { Switch, Route, Redirect, useRouteMatch, useParams } from 'react-router-dom'
import Header from './header';
import Footer from './footer';
import Cart from './user/Cart'
import Categories from './menu/Categories'
import Products from './product/Products'
import Account from './user/Account.jsx'
import SignUp from './user/SignUp.jsx'
import SignIn from './user/SignIn.jsx'

import AuthContextProvider from './../contexts/AuthContext';
import { AuthContext } from '../contexts/AuthContext.jsx';

class Main extends Component {
  static contextType = AuthContext
  componentDidMount(){
    console.log(this.context)
  }
  render() {
    console.log(this.context)
    return (
      <>
        <Header />
        <Switch>
          <Route path='/Category/SubCategory/' component={Categories}  /> 
          <Route path='/products' component={Products}  /> 
          <Route path='/menu/categories' component={Categories}  /> 
          <Route path='/user/cart' component={Cart}  /> 
          <Route path='/user/signup' component={SignUp}  /> 
          <Route path='/user/signin' component={SignIn}  /> 
          <Route exact path='/user' component={Account}  /> 
        </Switch>
        <Footer />
      </>
    )
  }
}

export default Main


{/*
  *import Product from './product/Product'
  *<Route exact path='/product' component={Product}  /> 
  */}
