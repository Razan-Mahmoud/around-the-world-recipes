import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function MealsByArea() {
let {area} = useParams()
// console.log(area);

    let [foodByAreaList, setFoodList] = useState([])
  useEffect(()=>{
    foodByArea()
  },[])
  async function foodByArea(){
    let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    setFoodList(data.meals);
    
  }
  return (
    <>
    <div className="row g-3">
    {foodByAreaList?.map((el)=>{
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
