import React, { Component, useEffect } from 'react'
import { Switch, Route, Redirect, useRouteMatch, useParams } from 'react-router-dom'
import Header from './components/header';
import Footer from './components/footer';
import Products from './components/product/Products'
import Account from './components/user/Account.jsx'
import Cart from './components/user/Cart'
import Orders from './components/user/Orders.jsx'
import Addresses from './components/user/Addresses.jsx'
import Checkout from './components/user/checkout/Checkout.jsx'
import NoPageFound from './components/NoPageFound.jsx'



const Main = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/category/:categoryName' component={Products}  /> 
        <Route exact path='/user' component={Account}  /> 
        
        <Route exact path='/user/cart' component={Cart}  /> 
        <Route path='/user/orders' component={Orders}  /> 
        <Route path='/user/addresses' component={Addresses}  /> 
        
        <Route path='/user/cart/checkout' component={Checkout}  /> 

        <Route path='/user/signup' > 
          <Redirect to='/user'/>
        </Route>
        <Route path='/user/signin' > 
          <Redirect to='/user'/>
        </Route>
        <Route path="*">
          <NoPageFound />
        </Route>

      </Switch>
      <Footer />
    </>
  )
}

export default Main


{/*
  *import Product from './product/Product'
  *<Route exact path='/product' component={Product}  /> 
  */}
