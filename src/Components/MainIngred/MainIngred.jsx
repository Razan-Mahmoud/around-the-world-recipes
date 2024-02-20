import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


export default function MainIngred() {
    let {categ} = useParams()
 
    let [mainIngredient, setmainIngredient] = useState([])
 
   useEffect(()=>{
    getMain()
  },[])
  async function getMain(){
    let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${categ}`)
    setmainIngredient(data.meals);
  }
  function backBtn(){
    window.history.back();
  }
  return (
    <>
   
    <div className="container my-3">

    <div className="row g-3">
    {mainIngredient?.map((el)=>{
          return <div key={el.idMeal} className="col-md-3 mealItem">
            <Link to={'/around-the-world-recipes/recipe/'+ el.idMeal + "/" } className='text-decoration-none'>
          <div className='item '>
          <img src={el.strMealThumb} className="coverImg w-100 rounded" alt="" />
          <div className='itemTitle text-center rounded'><h3>{el.strMeal}</h3></div>
         
          </div>
          </Link>
        </div>
        })}
    </div>
    <i onClick={backBtn} class="fa-solid fa-square-caret-left text-primary fa-2x m-3 position-fixed bottom-0 end-0"></i>
    </div>
   
    </>
  )
}
