import React, { Component } from 'react'
import { Switch, Route, Redirect, useRouteMatch, useParams } from 'react-router-dom'
import Header from './header';
import Footer from './footer';
import Cart from './user/Cart'
import Account from './user/index.jsx'

class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path='/user/cart' component={Cart}  /> 
          <Route exact path='/user' component={Account}  /> 
        </Switch>
        <Footer />
      </>
    )
  }
}

export default Main
