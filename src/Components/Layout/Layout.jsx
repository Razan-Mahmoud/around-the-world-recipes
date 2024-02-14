import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'



export default function Layout() {
  return (
    <>
 
 <Navbar/>

<div className="container-fluid ">
  <div className="row ">
  <div className='col-md-10 mx-auto my-3'>
    
<Outlet/>
</div>
  </div>
</div>
     
    
    </>
  )
}
