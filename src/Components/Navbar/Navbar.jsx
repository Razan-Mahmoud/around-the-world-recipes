import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import $ from 'jquery'

export default function Navbar() {

useEffect(()=>{
  closeNav()
},[])

  function calcWidth(){

    let left = $(".offNav").css("left")
    if (left == "0px"){
      let innerWidth = $(".offNav-inner").outerWidth(true)
      $(".offNav").animate({left: `-${innerWidth}px`}, 500)
      $(".equals").css("display", "block")
      $(".xMark").css("display", "none")

    } else{
      let innerWidth = $(".offNav-inner").outerWidth(true)
$(".offNav").animate({left: `0px`}, 500)
$(".equals").css("display", "none")
$(".xMark").css("display", "block")
    }

  }

  function closeNav(){
    let innerWidth = $(".offNav-inner").outerWidth(true)
    $(".offNav").css({left: `-${innerWidth}px`})
  }


  return (
    <>
    <div className='offNav'>
      
<div className='offNav-inner ps-2 '>

<ul className='my-3 list-unstyled d-flex flex-column'>
  <Link onClick={calcWidth} className='nav-link' to="/around-the-world-recipes/search">Search</Link>
  <Link onClick={calcWidth} className='nav-link' to='/around-the-world-recipes/categories'>Categories</Link>
  <Link onClick={calcWidth} className='nav-link' to='/around-the-world-recipes/area'>Area</Link>
  <Link onClick={calcWidth} className='nav-link' to='/around-the-world-recipes/ingredients'>Ingredients</Link>
  <Link onClick={calcWidth} className='nav-link' to='/around-the-world-recipes/contactUs'>Contact Us</Link>
</ul>

<div className='mt-5 pt-4'>
<i className="fa-brands fa-facebook p-1"></i>
<i className="fa-brands fa-twitter p-1"></i>
<i className="fa-solid fa-globe p-1"></i>
<p>Copyright Â© 2019 All Rights Reserved.</p>
</div>
      </div>
      <div className='offNav-icons bg-light d-flex justify-content-between   '>

       <div > 
       <Link to='/around-the-world-recipes/'><img src={logo} alt="smiley face" className='logo' /></Link>
       </div>

       <div onClick={calcWidth} className='my-3'>
       
       <i className="equals fa-solid fa-grip-lines "></i>
       <i className="xMark fa-solid fa-x "></i>
       </div>

       <div className='my-3'>
       <i className="fa-solid fa-globe p-2"></i>
       <i className="fa-solid fa-share-nodes p-2"></i>
       </div>
      </div>
    </div>
    </>
  )
}
