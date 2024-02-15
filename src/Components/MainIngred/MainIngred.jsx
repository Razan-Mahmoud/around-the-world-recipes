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

    // $(".spinClass").fadeOut("2000")
  }
  return (
    <>
     {/* <div className='spinClass position-fixed top-0 bottom-0 start-0 end-0 justify-content-center align-items-center'>
  <i className='fa-solid fa-spin fa-spinner fa-4x text-white'></i>
</div> */}
    <div className="container my-2">

    <div className="row g-3">
    {mainIngredient.map((el)=>{
          return <div key={el.idMeal} className="col-md-3 mealItem">
            <Link to={'/around-the-world-recipes/recipe/'+ el.idMeal + "/" }>
          <div className='item position-relative overflow-hidden rounded'>
          <img src={el.strMealThumb} className="coverImg w-100" alt="" />
         <div className="layer rounded d-flex justify-content-center align-items-center">
        <h3 className='p-2'>{el.strMeal}</h3>
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
