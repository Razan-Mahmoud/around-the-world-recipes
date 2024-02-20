import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


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
     <div className="container my-3">
     <div className="row g-3">
    {categ.map((el)=>{
          return <div key={el.idCategory} className="col-md-3 mealItem">
            <Link to={"/around-the-world-recipes/categMeals" + "/" + el.strCategory} className='text-decoration-none'>
          <div  className='item position-relative overflow-hidden rounded'>
          <img src={el.strCategoryThumb} className="coverImg w-100" alt="" />
          <div className='itemTitle text-center rounded overflow-hidden'><h3>{el.strCategory}</h3>
          <p>
            <span>
            {el.strCategoryDescription?.split(" ").splice(0,8).join(" ")}
            </span> <span className='text-primary'>..see more</span>
          </p>
          
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
