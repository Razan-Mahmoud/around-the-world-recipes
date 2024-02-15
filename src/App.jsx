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
  {path: "/around-the-world-recipes/", element: <Layout/>, children:[
    {path:"/around-the-world-recipes/", element:<Home/>},
    {path:"/around-the-world-recipes/home", element:<Home/>},
    {path: "/around-the-world-recipes/area", element: <Area/>},
    {path: "/around-the-world-recipes/search", element: <Search/>},
    {path: "/around-the-world-recipes/ingredients", element: <Ingredients/>},
    {path: "/around-the-world-recipes/mainIngred/:id/:categ", element: <MainIngred/>},
    {path: "/around-the-world-recipes/contactUs", element: <ContactUs/>},
    {path: "/around-the-world-recipes/categories", element: <Categories/>},
    {path: "/around-the-world-recipes/categMeals/:id", element: <CategMeals/>},
    {path: "/around-the-world-recipes/recipe/:id/", element: <Recipe/>},
    {path: "/around-the-world-recipes/:area/mealsByArea/", element: <MealsByArea/>},
  ]}
])
  
  return (

  
  <RouterProvider router={routes}/>
    
  )
}
