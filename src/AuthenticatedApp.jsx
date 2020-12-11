import React, { Component, useEffect } from 'react'
import { Switch, Route, Redirect, useRouteMatch, useParams } from 'react-router-dom'
import Header from './components/header';
import Footer from './components/footer';
import Products from './components/product/Products'
import Account from './components/user/Account.jsx'
import Cart from './components/user/Cart'
import Orders from './components/user/Orders.jsx'
import Addresses from './components/user/Addresses.jsx'
import CreateAddress from './components/user/CreateAddress.jsx'
import Checkout from './components/user/checkout/Checkout.jsx'
import NoPageFound from './components/NoPageFound.jsx'
import Loading from './components/Loading.jsx'

import HomePage from './components/HomePage.jsx'
import SearchResults from './components/search/SearchResults.jsx'



const Main = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}  /> 
        <Route path='/query/:queryName' component={SearchResults}  /> 
        
        <Route exact path='/category/:categoryName' component={Products}  /> 
        <Route exact path='/user' component={Account}  /> 
        
        <Route exact path='/user/cart' component={Cart}  /> 
        <Route path='/user/orders' component={Orders}  /> 
        <Route path='/user/addresses' component={Addresses}  /> 
        <Route path='/user/address/createaddress' component={CreateAddress}  /> 
        
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
        <Route exact path='/test' component={Loading}  /> 

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
