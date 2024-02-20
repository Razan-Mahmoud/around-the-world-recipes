import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import $ from 'jquery'
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
    <div className="container my-3">
    <div className="row g-3">
    {categMealsList.map((el)=>{
          return <div key={el.idMeal} className="col-md-3 mealItem">
            <Link to={'/around-the-world-recipes/recipe/'+ el.idMeal + "/"} className='text-decoration-none'>
          <div  className='item '>
          <img src={el.strMealThumb} className="coverImg w-100 rounded" alt="" />
          <div className='itemTitle text-center rounded'><h3 className='p-1'>{el.strMeal}</h3></div>
         
          </div>
          </Link>
        </div>
        })}
    </div>
    </div>
    </>
  )
}
