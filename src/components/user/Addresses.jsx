import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {getAddresses} from './../../actions/AddressActions.jsx';
import {makeDefault} from './../../actions/AddressActions.jsx'
import Loading from './../Loading.jsx'


const Addresses = () => {
  const [addresses, setAddresses] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    let mounted = true
    if(loading) getAddresses().then(res => {
      setAddresses(res.data)
      setLoading(false)
    })
    return () => mounted = false
  }, [])
 
  return (
    <main className="addresses">
      <h3>Addresses</h3>
      <div className="addresses-options">
        {
          loading ? null : 
            <Link to="/user/address/createaddress"><div className="button but-col">Create Address</div></Link>
        }
      </div>
      {
        loading ? <Loading /> : addresses.length  ? 
          <RenderAddresses addresses={addresses} />
          :
          <NoAddress/>
      }
    </main>
  )
} 

const RenderAddresses= ({addresses}) => {
    let [data, setData] = useState(addresses)

  const handleChange = (id) => {
    makeDefault(id)
    setData(result => data.map((item) => {
      if(item.isdefault && item._id != id) item.isdefault = false;
      if(item._id == id) item.isdefault = true 
      return item; 
    }))
  }

  useEffect(() => {
  }, [])
 
    console.log(data)

  const addressesItems = data.map( (item) => {
    const { _id, userid, name, mobile, pincode, landmark, address, isdefault } = item 
    return (
      <section className="address-item grid" key={_id}>
        <div className="addr-default" onClick={()=>handleChange(_id)}>
          <div>Default</div>
          <div className="flex-center">
          {
            isdefault? <i className="far fa-check-square" aria-hidden="true"></i>: <i className="far fa-square" aria-hidden="true"></i> 
          }
          </div>
        </div>
        <div className="addr-name">
          <div>Name</div>
          <div>{name}</div>
        </div>
        <div className="addr-mobile">
          <div>Mobile</div>
          <div>{mobile}</div>
        </div>
        <div className="addr-pincode">
          <div>Pincode</div>
          <div>{pincode}</div>
        </div>
        <div className="addr-landmark">
          <div>Landmark</div>
          <div>{landmark}</div>
        </div>
        <div className="addr-address">
          <div>Address</div>
          <div>{address}</div>
        </div>
      </section>
      )
    }
  )
  return (
    <div className="addresses-items">
      {addressesItems}
    </div>
  )
}


const NoAddress= () => {
  return (
    <section className="rem13">
      You haven't created any address yet!!
    </section>
  )
}



export default Addresses 
