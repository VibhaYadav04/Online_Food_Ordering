import React from 'react'
import { AdminSideBar } from './AdminSideBar'
import { Route, Routes } from 'react-router-dom'
// import { Dashboard } from '@mui/icons-material'
import FoodCategory from '../FoodCategory/FoodCategory'
import Ingredients from '../Ingredients/Ingredients'
import RestaurantDetails from './RestaurantDetails'
import RestaurantDashboard from '../Dashboard/Dashboard'
import Orders from '../Orders/Orders'
import Menu from '../Menu/Menu'
export const Admin = () => {
  const handleClose=()=>{

  }
  return (
    <div>
      <div className='lg:flex justify-between'>
        <div>
          <AdminSideBar handleClose={handleClose}/>
        </div>
        <div className='lg:w-[80%]'>
          <Routes>
            <Route path='/' element={<RestaurantDashboard/>}/> 
            <Route path='/orders' element={<Orders/>}/> 
            <Route path='/menu' element={<Menu/>}/> 
            <Route path='/category' element={<FoodCategory/>}/> 
            <Route path='/ingredients' element={<Ingredients/>}/>  
            <Route path='/details' element={<RestaurantDetails/>}/> 

          </Routes>
        </div>
      </div>
    </div>
  )
};
export default Admin