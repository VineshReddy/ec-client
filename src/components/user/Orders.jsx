import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {getOrders} from './../../actions/OrderActions.jsx';


const Orders = () => {
  const [orders, setOrders] = useState([]); 

  useEffect(() => {
    let mounted = true
    getOrders().then(res => setOrders(res.data))
    return () => mounted = false
  }, [])
 

  return (
    <main className="orders">
      <h3>Orders</h3>
      {
        orders.length  ? 
          <RenderOrders orders={orders} />
          :
          <NoOrders />
      }
    </main>
  )
} 

const RenderOrders = ({orders}) => {
  const orderItems = orders.map(order => {
    const { orderdate, addressid, addressName, orderstatus, totalprice } = order
    let date = new Date(orderdate)
    const orderdateConv = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    return (
      <section className="order-item" key={order._id}>
        <div className="order-header grid">
          <div className="order-date">
            <div>Order Date</div>
            <div>{orderdateConv}</div>
          </div>
          <div className="order-address">
            <div>Address</div>
            <div>
              <Link to={'/user/address/' + addressid} >
                {addressName}
              </Link>
            </div>
          </div>
          <div className="order-total">
            <div>Total</div>
            <div>₹{totalprice}</div>
          </div>
          <div className="order-status">
            <div>Status</div>
            {
              orderstatus ? <div class="success">Completed</div>
              : <div className="error">Active</div>
            }
          </div>
        </div>
        <RenderProducts products={order.products} />
      </section>
      )
    }
  )
  return (
    <div className="order-items">
      {orderItems}
    </div>
  )
}

const RenderProducts = ({products}) => {
  const productItems = products.map(product => {
    const { id, image, name,  quantity, price } = product
    return (
      <section className="order-product grid" key={product._id}>
        <div className="product-image">
          <Link to={'/product/' + product.id} >
            <img src={image} alt={name + " img"}  />
          </Link>
        </div>
        <div className="product-info">
          <div className="product-name">
            <Link to={'/product/' + product.id} >
              {name} 
            </Link>
          </div>
          <div className="product-quantity">Quantity : {quantity}</div>
          <div className="product-price">Unit Price : ₹{price}</div>
          <div className="product-price">Price : ₹{price * quantity}</div>
        </div>
        {
          product.deliverystatus?
            <div className="product-status error">Not Delivered</div>
            : <div className="product-status">{product.delivereddate}</div>
        }
      </section>
      )
    }
  )
  return (
    <div className="order-products grid">
      {productItems}
    </div>
  )
}


const NoOrders = () => {
  return (
    <section className="rem13">
      You haven't placed any orders yet!!
    </section>
  )
}



export default Orders 
