import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Home() {

let [mealsFirstOpen, setFirstOpen] = useState([])
  useEffect(()=>{
    firstOpen()
  },[])
  async function firstOpen(){
    let {data} = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    setFirstOpen(data.meals);
    $(".spinClass").fadeOut("2000")
  }
  
  return (
    <>

<div className='spinClass position-fixed top-0 bottom-0 start-0 end-0 justify-content-center align-items-center'>
  <i className='fa-solid fa-spin fa-spinner fa-4x text-white'></i>
</div>
    <div className="container my-2">

    <div className="row g-3">
    {mealsFirstOpen.map((el)=>{
          return <div key={el.idMeal} className="col-md-3 mealItem">
            <Link to={'/recipe/'+ el.idMeal + "/"}>
          <div  className='item position-relative overflow-hidden rounded'>
          <img src={el.strMealThumb} className="coverImg w-100" alt="" />
         <div className="layer rounded d-flex justify-content-center align-items-center">
        <h3>{el.strMeal}</h3>
         </div>
          </div>
          </Link>
        </div>
        })}
    </div>
    </div>
   
    </>
  )
}
