import React, {useState, useEffect, useContext} from 'react'
import { Link, useHistory} from 'react-router-dom'
import {placeOrder} from '../../../actions/OrderActions.jsx';
import {CartContext} from '../../../contexts/CartContext.jsx';
import {clearCart} from '../../../actions/CartActions.jsx';
import {getAddresses} from './../../../actions/AddressActions.jsx';

const Checkout = () => {

  let history = useHistory()

  const {cart, dispatch} = useContext(CartContext); 
  const {products} =  cart
  /*  Temporary */
  const [addressId, setAddressId] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    let mounted = true
    if(loading) getAddresses().then(res => {
      let addrTest = res.data.filter(e => e.isdefault )
      if(addrTest.length == 0  || addrTest[0] == "undefined") {
        history.push("/user/addresses");
        alert("You need a default address, as Checkout page is under construction")
        return;
      }


      let addr = res.data.filter(e => e.isdefault)[0]._id 
      setAddressId(addr)
      setLoading(false)
    })
    return () => mounted = false
  }, [])
 
  /* End  Temporary */

  useEffect(() => {
    let mounted = true
    return () => mounted = false
  }, [])

  function handleOrder() {
    placeOrder(products, addressId).then(res => {
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
