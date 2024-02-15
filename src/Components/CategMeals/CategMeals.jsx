import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function CategMeals() {
let {id} = useParams()

    let [categMealsList, setcategMealsList] = useState([])
  useEffect(()=>{
    getCategMeals()
  },[])
  async function getCategMeals(){
    let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
    setcategMealsList(data.meals);
 
  }

  return (
    <>
     <div className="row g-3">
    {categMealsList.map((el)=>{
          return <div key={el.idMeal} className="col-md-3 mealItem">
            <Link to={'/around-the-world-recipes/recipe/'+ el.idMeal + "/"}>
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
    </>
  )
}
