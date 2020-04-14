import React, { Component } from 'react'
import { Switch, Route, Redirect, useRouteMatch, useParams } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';

class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
        </Switch>
        <Footer />
      </>
    )
  }
}

export default Main
