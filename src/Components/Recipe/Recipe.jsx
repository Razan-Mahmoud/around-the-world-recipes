import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Recipe() {

    let {id} = useParams()
   
    let [recipe, setRecipe] = useState([])

    async function getRecipe(){
        let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        recipe = data.meals[0]
       setRecipe(data.meals[0])
   
  
     
    }
    useEffect(()=>{
        getRecipe()
       
    },[])

    function backBtn(){
        window.history.back();
      }
  return (
    <>
    <div className="container my-5">
        <div className="row ">
            <div className="col-md-4 ">
                <img src={recipe.strMealThumb} className='w-100 rounded' alt="" />
                <h3 className='m-2'>{recipe.strMeal}</h3>
            </div>
            <div className="col-md-8">
                <div className='my-1'>
                <h4>Instructions</h4>
                <p>{recipe.strInstructions}</p>
                <h5>Area: {recipe.strArea}</h5>
                <h5>Category: {recipe.strCategory}</h5>
                <h5>Recipe:</h5>
                <ol className='list-group '>


                
              <li className=' m-2 p-1'>{recipe.strMeasure1} {recipe.strIngredient1}</li>
                <li className='m-2 p-1'>{recipe.strMeasure2} {recipe.strIngredient2}</li>
                <li className='m-2'>{recipe.strMeasure3} {recipe.strIngredient3}</li>
                <li className='m-2'>{recipe.strMeasure4} {recipe.strIngredient4}</li>
                <li className='m-2'>{recipe.strMeasure5} {recipe.strIngredient5}</li>
                <li className='m-2'>{recipe.strMeasure6} {recipe.strIngredient6}</li>
                <li className='m-2'>{recipe.strMeasure7} {recipe.strIngredient7}</li>
                <li className='m-2'>{recipe.strMeasure8} {recipe.strIngredient8}</li>
                <li className='m-2'>{recipe.strMeasure9} {recipe.strIngredient9}</li>
                <li className='m-2'>{recipe.strMeasure10} {recipe.strIngredient10}</li>
                <li className='m-2'>{recipe.strMeasure11} {recipe.strIngredient11}</li>
                <li className='m-2'>{recipe.strMeasure12} {recipe.strIngredient12}</li>
                <li className='m-2'>{recipe.strMeasure13} {recipe.strIngredient13}</li>
                <li className='m-2'>{recipe.strMeasure14} {recipe.strIngredient14}</li>
                <li className='m-2'>{recipe.strMeasure15} {recipe.strIngredient15}</li>
                <li className='m-2'>{recipe.strMeasure16} {recipe.strIngredient16}</li>
                <li className='m-2'>{recipe.strMeasure17} {recipe.strIngredient17}</li>
                <li className='m-2'>{recipe.strMeasure18} {recipe.strIngredient18}</li>
                <li className='m-2'>{recipe.strMeasure19} {recipe.strIngredient19}</li>
                <li className='m-2'>{recipe.strMeasure20} {recipe.strIngredient20}</li>
              
                </ol>
                {recipe.strTags? <h5>Tags:</h5>: ""}
                {recipe.strTags? <div className='rounded tagBtn p-2 w-50'>{recipe.strTags}</div> : ""}
                
                <div className='my-2'>
                    <Link to={recipe.strSource} target='_blank'>
                <button className='btn btn-success me-2'>Source</button>
                </Link>
                <Link to={recipe.strYoutube} target='_blank'>
                <button className='btn btn-danger me-2'>Youtube</button>
                </Link>
                </div>
                </div>
            </div>
        </div>
        <i onClick={backBtn} class="fa-solid fa-square-caret-left text-primary fa-2x mt-1"></i>
    </div>
    </>
  )
}
