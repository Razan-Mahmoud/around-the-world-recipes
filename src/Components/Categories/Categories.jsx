import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

export default function Categories() {


  let [categ, setCateg] = useState([])

  async function getCateg(){
    let {data} = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    setCateg(data.categories)
  }
  useEffect(()=>{
    getCateg()
  },[])
  return (
    <>
     <div className="row g-3">
    {categ.map((el)=>{
          return <div key={el.idCategory} className="col-md-3 mealItem">
            <Link to={"/around-the-world-recipes/categMeals" + "/" + el.strCategory}>
          <div  className='item position-relative overflow-hidden rounded'>
          <img src={el.strCategoryThumb} className="coverImg w-100" alt="" />
         <div className="layer rounded d-flex justify-content-center align-items-center flex-column">
        <h3>{el.strCategory}</h3>
       <div className='text-center overflow-hidden'>
       <p>{el.strCategoryDescription}</p>
       </div>
         </div>
          </div>
          </Link>
        </div>
        })}
    </div>
    </>
  )
}
