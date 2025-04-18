import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'
import { Home } from '../Home/Home'
import { RestaurantDetails } from '../Restaurant/RestaurantDetails'
import { Cart } from '../Cart/Cart'
import { Profile } from '../Profile/Profile'
import {Auth} from '../Auth/Auth'
import { OrderSuccess } from '../Profile/OrderSuccess'
export const CustomerRoute = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/account/:register' element={<Home/>} />
           <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails/>} />
           <Route path='/cart' element={<Cart/>} />
           <Route path='/my-profile/*' element={<Profile/>} />
           <Route path='/order-success' element={<OrderSuccess/>} />
        </Routes>
        <Auth/>
    </div>
  )
}
