import React from 'react'
import { Card, Chip, IconButton } from '@mui/material'
import FavouriteIcon from '@mui/icons-material/Favorite';
import FavouriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { isPresentInFavorites } from "../config/logic"
import { addToFavorite } from '../State/Authentication/Action';

export const RestaurantCard = ({ item }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt")
    const { auth } = useSelector(store => store)

    // handle add to fav
    const handleAddToFavorite = () => {
        dispatch(addToFavorite({ restaurantId: item.id, jwt }))
    }

    // navigate to restaurant
    const handleNavigateToRestaurant = () => {
        if (item.open) {
            navigate(`restaurant/${item.address.city}/${item.name}/${item.id}`)
        }
    }

    return (
        <Card className='w-[18 rem]'>
            <div className={`${true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
                <img
                    className='w-full h-[10rem] rounded-t-md object-cover'
                    src={item.images[0]} alt="" />
                <Chip
                    size='small'
                    className='absolute top-2 left-2'
                    color={item.open ? "success" : "success"}
                    label={item.open ? "Open" : "Open"}
                />
            </div>
            <div className='p-4 textPart lg:flex w-full justify-between'>
                <div className='space-y-1'>
                    <p onClick={handleNavigateToRestaurant} className='font-semibold text-lg cursor-pointer'>{item.name || item.title}</p>
                    <p className='text-gray-400 text-sm italic'>{item.description}</p>
                </div>
                <div>

                    <IconButton onClick={handleAddToFavorite}>

                        {isPresentInFavorites(auth.favorites, item) ? <FavouriteIcon /> : <FavouriteBorderIcon />}
                    </IconButton>
                </div>
            </div>
        </Card>
    )
}
export default RestaurantCard