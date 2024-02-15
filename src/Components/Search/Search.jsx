import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home/Home'


export default function Search() {


let [nameIput, setNameInput] = useState("")

function handleChange(value){
  setNameInput(value)
  searchByName(value)
}

let [nameList, setNameList] = useState({})
async function searchByName(value){
  let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
  setNameList(data.meals[0])
  console.log(data);
  $("#byNameRecipe").css("display", "block")
 
}


useEffect(()=>{
  searchByName()
},[])

let [firstLetter, setFirstLetter] = useState("")

function handleFirstLetter(value){
  setFirstLetter(value)
  searchByFirstLetter(value)
}

let [letterList, setLetterList] = useState([])
async function searchByFirstLetter(value){
  let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`)
  setLetterList(data.meals)
console.log(data);

}
  return (
    <>
  
   <div className="row d-flex justify-content-center align-items-center mb-4">
     <div className="col-md-6 mt-2">
     <form >
        <input onKeyUp={(e)=>handleChange(e.target.value)} type="text" name="mealName" id='mealName' className='form-control bg-transparent border-2' placeholder='Search by name'/>
       
      </form>
     </div>
     <div className="col-md-6 mt-2">
     <form >
        <input type="text" name="firstLetter" id='firstLetter' onKeyUp={(e)=>handleFirstLetter(e.target.value)} className='form-control bg-transparent border-2' placeholder='Search by first letter'/>
       
      </form>
     </div>
    </div>



    <div className="container my-5" id="byNameRecipe">
        <div className="row ">
            <div className="col-md-4 ">
                <img src={nameList.strMealThumb} className='w-100 rounded' alt="" />
                <h3 className='m-2'>{nameList.strMeal}</h3>
            </div>
            <div className="col-md-8">
                <div className='my-1'>
                <h4>Instructions</h4>
                <p>{nameList.strInstructions}</p>
                <h5>Area: {nameList.strArea}</h5>
                <h5>Category: {nameList.strCategory}</h5>
                <h5>Recipe:</h5>
                <ol className='list-group '>

              <li className=' m-2 p-1'>{nameList.strMeasure1} {nameList.strIngredient1}</li>
                <li className='m-2 p-1'>{nameList.strMeasure2} {nameList.strIngredient2}</li>
                <li className='m-2'>{nameList.strMeasure3} {nameList.strIngredient3}</li>
                <li className='m-2'>{nameList.strMeasure4} {nameList.strIngredient4}</li>
                <li className='m-2'>{nameList.strMeasure5} {nameList.strIngredient5}</li>
                <li className='m-2'>{nameList.strMeasure6} {nameList.strIngredient6}</li>
                <li className='m-2'>{nameList.strMeasure7} {nameList.strIngredient7}</li>
                <li className='m-2'>{nameList.strMeasure8} {nameList.strIngredient8}</li>
                <li className='m-2'>{nameList.strMeasure9} {nameList.strIngredient9}</li>
                <li className='m-2'>{nameList.strMeasure10} {nameList.strIngredient10}</li>
                <li className='m-2'>{nameList.strMeasure11} {nameList.strIngredient11}</li>
                <li className='m-2'>{nameList.strMeasure12} {nameList.strIngredient12}</li>
                <li className='m-2'>{nameList.strMeasure13} {nameList.strIngredient13}</li>
                <li className='m-2'>{nameList.strMeasure14} {nameList.strIngredient14}</li>
                <li className='m-2'>{nameList.strMeasure15} {nameList.strIngredient15}</li>
                <li className='m-2'>{nameList.strMeasure16} {nameList.strIngredient16}</li>
                <li className='m-2'>{nameList.strMeasure17} {nameList.strIngredient17}</li>
                <li className='m-2'>{nameList.strMeasure18} {nameList.strIngredient18}</li>
                <li className='m-2'>{nameList.strMeasure19} {nameList.strIngredient19}</li>
                <li className='m-2'>{nameList.strMeasure20} {nameList.strIngredient20}</li>
              
                </ol>
                {nameList.strTags? <h5>Tags:</h5>: ""}
                {nameList.strTags? <div className='rounded tagBtn p-2 w-50'>{nameList.strTags}</div> : ""}
                
                <div className='my-2'>
                    <Link to={nameList.strSource} target='_blank'>
                <button className='btn btn-success me-2'>Source</button>
                </Link>
                <Link to={nameList.strYoutube} target='_blank'>
                <button className='btn btn-danger me-2'>Youtube</button>
                </Link>
                </div>
                </div>
            </div>
        </div>
    </div>






    <div className="container my-2">

<div className="row g-3">
{letterList? letterList.map((el)=>{
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
    }): ""}
</div>
</div>
    </>
  )
}
