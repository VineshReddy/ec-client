import React, {useEffect, useContext} from 'react'
import { Link, useHistory} from 'react-router-dom'
import {placeOrder} from '../../../actions/OrderActions.jsx';
import {CartContext} from '../../../contexts/CartContext.jsx';
import {clearCart} from '../../../actions/CartActions.jsx';

const Checkout = () => {
  let history = useHistory()

  const {cart, dispatch} = useContext(CartContext); 
  const {products} =  cart

  useEffect(() => {
    let mounted = true
    return () => mounted = false
  }, [])

  function handleOrder() {

    const addressid =  "5ead1e7cd95abc5b79fe8cf8";
    placeOrder(products, addressid).then(res => {
      clearCart(dispatch)
      history.push('/user/orders')
    })
  }
 

  function showContent(e){
    const content = e.target.nextSibling
    content.style.display = "block"
  }

  return (
    <main className="account">
      <h3>Checkout</h3>
      <div className="checkout-items">
        <div className="checkout-login">
          <div className="collapsible" onClick={showContent}>Login</div>
          <div className="content"></div>
        </div>
        <div className="checkout-address">
          <div className="collapsible" onClick={showContent}>
            Select Address
          </div>
          <div className="content"></div>
        </div>
        <div className="checkout-summary">
          <div className="collapsible" onClick={showContent} >Order Summary</div>
          <div className="content"></div>
        </div>
        <div className="checkout-payment">
          <div className="collapsible" onClick={showContent} >Payment Methods</div>
          <div className="content">
          </div>
        </div>
      </div>
      <div className="button but-col" onClick={handleOrder}>Place Order & Pay</div>
    </main>
  )
}

export default Checkout 
