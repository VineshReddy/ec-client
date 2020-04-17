import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {

  const handleClick = (e) => {
    console.log(e)
    var content = e.target.nextElementSibling;
    content.classList.toggle("show-content")
  }

  return (
    <main className="categories" >
      <h3>Categories</h3>
      <section className="menu">
        Menu
        <ul className="side-nav">
          <li>
            Category 1
            <ul className="menu-open">
              <li>Sub Category</li>
              <li>Sub Category 2</li>
            </ul>
          </li>
          <li>
            Category 2
            <ul className="menu-open">
              <li>sdfaSub Category</li>
              <li>asdjfkSub Category 2</li>
            </ul>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default Categories
