import React, { useEffect } from 'react';
import { AdminSideBar } from './AdminSideBar';
import { Route, Routes } from 'react-router-dom';
import FoodCategory from '../FoodCategory/FoodCategory';
import Ingredients from '../Ingredients/Ingredients';
import RestaurantDetails from './RestaurantDetails';
import RestaurantDashboard from '../Dashboard/Dashboard';
import Orders from '../Orders/Orders';
import Menu from '../Menu/Menu';
import CreateMenuForm from '../Menu/CreateMenuForm';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantsCategory } from '../../component/State/Restaurant/Action';
import { fetchRestaurantOrder } from '../../component/State/Restaurant Order/Action';

export const Admin = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');

  // Corrected selector to prevent returning the entire store
  const restaurant = useSelector(state => state.restaurant);

  const handleClose = () => { };

  useEffect(() => {
    if (restaurant?.usersRestaurant?.id) {
      dispatch(getRestaurantsCategory({ jwt, restaurantId: restaurant.usersRestaurant.id }));
      dispatch(fetchRestaurantOrder({ jwt, restaurantId: restaurant.usersRestaurant.id }));
    }
  }, [dispatch, jwt, restaurant?.usersRestaurant?.id]); // Added dependencies to avoid stale state

  return (
    <div>
      <div className='lg:flex justify-between'>
        <div>
          <AdminSideBar handleClose={handleClose} />
        </div>
        <div className='lg:w-[80%]'>
          <Routes>
            {/* <Route path='/' element={<RestaurantDashboard />} /> */}
            <Route path='/orders' element={<Orders />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/category' element={<FoodCategory />} />
            <Route path='/ingredients' element={<Ingredients />} />
            <Route path='/details' element={<RestaurantDetails />} />
            <Route path='/add-menu' element={<CreateMenuForm />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
