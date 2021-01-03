import React, {useState, useEffect} from 'react'

const HomePage = () => {
  return (
    <main >
      <img src="https://i.gifer.com/YVPE.gif" width="300px" alt="" />
      <p>This project is abandoned in May 2019.</p>
      <p><b>Features: </b></p>
      <ul>
        <li>Categories and SubCategories</li>
        <li>Account</li>
        <li>Cart</li>
        <li>Orders</li>
        <li>Search (Need to be improved)</li>
      </ul>
      <p><b>Demo:</b></p>
      <ul>
        <li>A single Category(<em>Groceries</em>) is implemented with 2 SubCategories(<em>Pluses, Flours</em>) just for example but could have easily implement all categories without extra work.</li>
        <li>User can order Products and specify the quantity.</li>
        <li>Checkout page not implemented.</li>
        <li>Demo User: test@gmail.com Password: test</li>
      </ul>
    </main>

  )
}

export default HomePage 
