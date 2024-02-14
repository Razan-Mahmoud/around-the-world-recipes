import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import Area from './Components/Area/Area'
import Search from './Components/Search/Search'
import Ingredients from './Components/Ingredients/Ingredients'
import ContactUs from './Components/ContactUs/ContactUs'
import Categories from './Components/Categories/Categories'
import Recipe from './Components/Recipe/Recipe'
import MainIngred from './Components/MainIngred/MainIngred'
import MealsByArea from './Components/MealsByArea/MealsByArea'
import CategMeals from './Components/CategMeals/CategMeals'



export default function App() {
let routes = createBrowserRouter([
  {path: "", element: <Layout/>, children:[
    {path:"./", element:<Home/>},
    {path:"home", element:<Home/>},
    {path: "area", element: <Area/>},
    {path: "search", element: <Search/>},
    {path: "ingredients", element: <Ingredients/>},
    {path: "mainIngred/:id/:categ", element: <MainIngred/>},
    {path: "contactUs", element: <ContactUs/>},
    {path: "categories", element: <Categories/>},
    {path: "categMeals/:id", element: <CategMeals/>},
    {path: "recipe/:id/", element: <Recipe/>},
    {path: ":area/mealsByArea/", element: <MealsByArea/>},
  ]}
])
  
  return (

  
  <RouterProvider router={routes}/>
    
  )
}
