import React, { Component } from 'react' 
import { Switch, Route, Redirect, useRouteMatch, useParams } from 'react-router-dom'
import Header from './components/header';
import Footer from './components/footer';
import Cart from './components/user/Cart'
import Products from './components/product/Products'
import SignUp from './components/user/SignUp.jsx'
import SignIn from './components/user/SignIn.jsx'
import NoPageFound from './components/NoPageFound.jsx'


class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/category/:categoryName' component={Products}  /> 
          <Route exact path='/user/cart' component={Cart}  /> 
          <Route path='/user/signup' component={SignUp}  /> 
          <Route path='/user/signin' component={SignIn}  /> 

          <Route exact path='/user' component={NotAuth}  /> 
          <Route exact path='/user/orders' component={NotAuth}  /> 
          <Route exact path='/user/addresses' component={NotAuth}  /> 
          <Route exact  path='/user/cart/checkout' component={NotAuth}  /> 
          <Route path='/user/address/createaddress' component={NotAuth}  /> 

          <Route path="*">
            <NoPageFound />
          </Route>

        </Switch>
        <Footer />
      </>
    )
  }
}


const NotAuth = () => {
  return (
    <Redirect to="/user/signin" />
  )
}


export default Main


{/*
  *import Product from './product/Product'
  *<Route exact path='/product' component={Product}  /> 
  */}
