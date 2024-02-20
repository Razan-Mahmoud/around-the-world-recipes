import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import $ from 'jquery'

export default function Area() {
  let [areas, setareas] = useState([])
  useEffect(()=>{
    getAreas()
  },[])
  async function getAreas(){
    let {data} = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    setareas(data.meals);
  //  console.log(areas);
  }

  
  return (
    <>
  
    <div className="container my-3">
    <div className="row g-2 my-4">
     {areas.map((el)=>{
      return <div key={el.strArea} className="col-md-3 ">
      <Link className='mealItem' to={"/around-the-world-recipes/"+el.strArea + "/" +"mealsByArea/" }>
      <div>
      <i className='fa-solid fa-house-laptop fa-5x '></i>
      <h3>{el.strArea}</h3>
      </div>
      </Link>
    </div>
     })}
    </div>
    </div>
  
    
   
    </>
  )
}
