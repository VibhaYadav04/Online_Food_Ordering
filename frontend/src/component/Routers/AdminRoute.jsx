import React from 'react'
import {Route, Routes} from 'react-router-dom'
import  {CreateRestaurantForm}  from '../../Admin Component/CreateRestaurantForm/CreateRestaurantForm'
import {Admin} from '../../Admin Component/Admin/Admin'
export const AdminRoute = () => {
  return (
    <div>
        <Routes>
             <Route path="/*" element={false?<CreateRestaurantForm/> : <Admin/>}> 
            

            </Route>
        </Routes>
    </div>
  )
}
