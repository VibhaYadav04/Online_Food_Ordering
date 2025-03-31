import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { MenuCard } from './MenuCard';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getRestaurantById, getRestaurantsCategory } from '../State/Restaurant/Action'
import { getMenuItemByRestaurantId } from '../State/Menu/Action'

const foodTypes = [
    { label: "All", value: "All" },
    { label: "Vegetarian Only", value: "vegetarian" },
    { label: "Non-Vegetarian", value: "non_vegetarian" },
    { label: "Seasonal", value: "seasonal" },
]

//const menu=[1,1,1,1]

export const RestaurantDetails = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt")
    const { auth, restaurant, menu } = useSelector(store => store)
    const [selectedCategory, setSelectedCategory] = useState("")

    const { id, city } = useParams();

    const [foodType, setFoodType] = useState("all")

    // to set the filter of  food type
    const handleFilter = (e) => {
        setFoodType(e.target.value);
        console.log(e.target.value, e.target.name)
    }

    // to set the filter  food category
    const handleFilterCategory = (e) => {
        setSelectedCategory(e.target.value);
        console.log(e.target.value, e.target.name)
    }

    console.log("restaurant by id ", restaurant)
    
    // functions of restaurant
    useEffect(() => {
        dispatch(getRestaurantById({ jwt, restaurantId: id }))
        dispatch(getRestaurantsCategory({ jwt, restaurantId: id }))
    }, [])

    // getting all menu of any particular restaurant
    useEffect(() => {
        dispatch(getMenuItemByRestaurantId({
            jwt, restaurantId: id,
            vegetarian: foodType==="vegetarian",
            nonveg: foodType==="non_vegetarian",
            seasonal: foodType==="seasonal",
            foodCategory: selectedCategory,
        }))
    }, [selectedCategory, foodType])

    return (
        <div className='px-5 lg:px-20'>
            <section>
                <div>
                <h1 className='text-4xl font-semibold my-4'>{restaurant.restaurant?.name}</h1>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover'
                                src={restaurant.restaurant?.images[0]} alt="restaurant" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover'
                                src={restaurant.restaurant?.images[1]} alt="restaurant" />
                        </Grid>
                    </Grid>
                </div>
                <div className='pt-3 pb-5'>
                    
                    <p className='text-gray-300 mt-1 italic'>{restaurant.restaurant?.description}</p>

                    <div className='space-y-3 mt-3'>
                        <p className='text-gray-300 flext item-center gap-3'>
                            <LocationOnIcon />
                            <span>Kolkata, West Bengal</span>
                        </p>
                        <p className='text-gray-300 flex item-center gap-3'>
                            <CalendarTodayIcon />
                            <span> Mon-Sun: 9:00 AM - 9:00 PM</span>
                        </p>
                    </div>
                </div>
            </section>
            <Divider />
            <section className='pt-[2rem] lg:flex relative '>
                <div className="space-y-10 lg:w-[20%] filter">
                    <div className="box space-y-5 lg:sticky top-28">
                        {/* Food Category Filter */}
                        {/* <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                Food Type
                            </Typography>
                            <FormControl className='py-10 space-y-5' component="fieldset">
                                <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                                    {foodTypes.map((item) => (

                                        <FormControlLabel
                                            key={item.value}
                                            value={item.value}
                                            control={<Radio />}
                                            label={item.label}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div> */}

                        {/* <Divider /> */}

                        {/* Food Category Filter */}
                        {/* <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                Food Categories
                            </Typography>
                            <FormControl className='py-10 space-y-5' component="fieldset">
                                <RadioGroup
                                    onChange={handleFilterCategory}
                                    name='food_category'
                                    value={selectedCategory}>
                                    {restaurant.categories.map((item) => (

                                        <FormControlLabel
                                            key={item}
                                            value={item.name}
                                            control={<Radio />}
                                            label={item.name}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div> */}
                    </div>
                </div>

                <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                    {menu.menuItems.map((item) => <MenuCard item={item} />)}
                </div>
            </section>

        </div>
    )
}
