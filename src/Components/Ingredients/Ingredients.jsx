import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function Ingredients() {

let [ingrList, setIngrList] = useState([])
async function getIngred(){
  let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
  setIngrList(data.meals)
  
  console.log(data.meals[0].strDescription.split(" ").slice(0,10).join(' '));
}
useEffect(()=>{
  getIngred()
},[])

function backBtn(){
  window.history.back();
}
  return (
    <>
<div className="container my-3">
<div className="row">
  {ingrList.map((el)=>{
    return <div key={el.idIngredient} className="col-md-3 mt-2">
   <Link className='ingredItem' to={"/around-the-world-recipes/mainIngred/"+ el.idIngredient + "/" + el.strIngredient}>
    <div className='p-2  text-center'>
<i className="fa-solid fa-drumstick-bite fa-4x"></i>
<h4 className='m-1'>{el.strIngredient}</h4>
<p className='m-1'>{el.strDescription? el.strDescription.split(" ").slice(0,10).join(" "): el.strDescription}</p>
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
