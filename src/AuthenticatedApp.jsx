import React, { Component, useEffect } from 'react'
import { Switch, Route, Redirect, useRouteMatch, useParams } from 'react-router-dom'
import Header from './components/header';
import Footer from './components/footer';
import Cart from './components/user/Cart'
import Categories from './components/menu/Categories'
import Products from './components/product/Products'
import Account from './components/user/Account.jsx'
import NoPageFound from './components/NoPageFound.jsx'


const Main = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/Category/SubCategory/' component={Categories}  /> 
        <Route path='/products' component={Products}  /> 
        <Route path='/menu/categories' component={Categories}  /> 
        <Route exact path='/user' component={Account}  /> 
        
          <Route path='/user/cart' component={Cart}  /> 

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
