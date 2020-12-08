import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'

import { categories } from './../../data/categories.jsx'

const NavBar = () => {

  function toggleNav(){
    const body = document.getElementsByTagName("body")[0]
    const catNav = document.querySelector('.sidenav')
    const Cat = document.querySelector('.sidenav-body-category')
    const subCat = document.querySelector('.sidenav-body-subcategory')

    if(catNav.style.display === "block") {
      catNav.style.display = "none" 
      subCat.style.display = "none" 
      body.style.overflow = 'auto';
    }
    else {
      catNav.style.display = "block"
      Cat.style.display = "block" 
      body.style.overflow = 'hidden';
    } 
  }

  return (
    <>
      <CategoriesNav  toggleNav={toggleNav} />
    <nav className="navbar grid">
      <div className="nav-item categories button" onClick={toggleNav} >
          <div className="nav-item-content">
            <i className="fas fa-bars"></i>
            <span>Categories</span>
          </div>
      </div>
      <div className="nav-item logo button">
        <Link to="/">
          <div className="nav-item-content">
            <span>Logo.com</span>
          </div>
        </Link>
      </div>
      <div className="nav-item search ">
          <div className="nav-item-content">
              <div className="search-container">
                 <input className="searchbar" type="text" placeholder="Search.." name="search" />
                 <button type="submit">
                  <i className="fas fa-search"></i>
                 </button>
              </div>
          </div>
      </div>

      <div className="nav-item nav-account button">
        <Link to="/user">
          <div className="nav-item-content">
            <i className="fas fa-user-alt"></i>
            <span>Account</span>
          </div>
        </Link>
      </div>
      <div className="nav-item offers button">
        <Link to="/">
          <div className="nav-item-content">
            <i className="fas fa-gift"></i>
            <span>Offers</span>
          </div>
        </Link>
      </div>
      <div className="nav-item help button">
        <Link to="/">
          <div className="nav-item-content">
            <i className="fas fa-phone"></i>
            <span>Help</span>
          </div>
        </Link>
      </div>
      <div className="nav-item cart button">
        <Link to="/user/cart">
          <div className="nav-item-content">
            <i className="fa fa-shopping-cart"></i>
            <span>Cart</span>
          </div>
        </Link>
      </div>
    </nav>
    </>
  )
}

const CategoriesNav = ({toggleNav}) =>  {
  const [subcategory, setSubCategory] = useState(null)
  const showSubCategory  = (sub) => {
    const cat = document.querySelector('.sidenav-body-category')
    const subCat = document.querySelector('.sidenav-body-subcategory')
    cat.style.display = "none"; 
    subCat.style.display = "block"; 
    setSubCategory(sub)
  }
  return(
    <div className="sidenav">
      <div className="sidenav-header">
        <div className="sidenav-heading flex-center">Categories</div>
        <div className="sidenav-close" onClick={toggleNav} ><i className="fas fa-times fa-2x"></i></div>
      </div>
      <div className="sidenav-body-category">
        <RenderCategories showSubCategory={showSubCategory} />
      </div>
      <div className="sidenav-body-subcategory">
        {
          subcategory == null? null : <RenderSubCategories subcategory={subcategory} toggleNav={toggleNav} />
        }
      </div>
    </div>
  )
}


const RenderCategories = ({showSubCategory}) =>  {
  const categoryList = categories.map(category => (
    <div className="sidenav-item button" onClick={ () => showSubCategory(category.subcategories)}  key={category.id}>
        {category.label}
      </div>
  ))
  return categoryList
}

const RenderSubCategories = ({subcategory, toggleNav}) =>  {
  const subcategoryList = subcategory.map(subcategory => (
      <div className="sidenav-item" key={subcategory.id} >
        <Link to={'/category/'+ subcategory.id}  className="button" onClick={toggleNav} >
          {subcategory.label}
        </Link>
      </div>
  ))
  return (
    <>
    { subcategoryList }
    </>
  )
}




export default NavBar
