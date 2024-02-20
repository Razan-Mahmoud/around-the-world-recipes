import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'



export default function Layout() {
  return (
    <>

<div className="container-fluid ">
<Navbar/>
<Outlet/>
 {/* <div className="row ">
 <div className=' mx-auto my-3'>
    

</div>
  </div> */}
</div>
     
    
    </>
  )
}
