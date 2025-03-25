import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { MenuCard } from './MenuCard';


const categories=[
    "Pizza",
    "Biryani",
    "Burger",
    "Chicken Rolls"
]

const foodTypes=[
    {label:"All", value:"All"},
    {label:"Vegetarian Only", value:"vegetarian"},
    {label:"Non-Vegetarian", value:"non_vegetarian"},
    {label:"Seasonal", value:"seasonal"},
]

const menu=[1,1,1,1]

export const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all")

    const handleFilter = (e) => {
        setFoodType(e.target.value); 
        console.log(e.target.value, e.target.name)
    }
  return (
    <div className='px-5 lg:px-20'>
        <section>
            <h3 className='text-gray-500 py-2 mt-10'>Home/India/Indian Fast Food/3</h3>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img className='w-full h-[40vh] object-cover' 
                        src="https://media.istockphoto.com/id/1131393938/photo/very-stylish-indian-gourmet-restaurant.jpg?b=1&s=612x612&w=0&k=20&c=3zzNV5a4zgM-ht12J3Bc_O3r-DsZthZnDoZMauVjg3c=" alt="restaurant"/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img className='w-full h-[40vh] object-cover' 
                        src="https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=600" alt="restaurant"/>
                    </Grid>  
                    <Grid item xs={12} lg={6}>
                        <img className='w-full h-[40vh] object-cover' 
                        src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=600" alt="restaurant"/>
                    </Grid>    
                </Grid>
            </div>
            <div className='pt-3 pb-5'>
                <h1 className='text-4xl font-semibold'>Indian Fast Food</h1>
                <p className='text-gray-500 mt-1'>Indian, Fast Food, Beverages</p>

                <div className='space-y-3 mt-3'>
                <p className='text-gray-500 flext item-center gap-3'>
                    <LocationOnIcon/>
                    <span>Kolkata, West Bengal</span>
                </p>
                <p className='text-gray-500 flex item-center gap-3'>
                    <CalendarTodayIcon/>
                    <span> Mon-Sun: 9:00 AM - 9:00 PM(Today)</span>
                </p>
                </div>
            </div>
        </section>
        <Divider/>
        <section className='pt-[2rem] lg:flex relative '>
           <div className="space-y-10 lg:w-[20%] filter">
             <div className="box space-y-5 lg:sticky top-28">
                <div>
                   <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                    Food Type
                    </Typography>
                    <FormControl className='py-10 space-y-5' component="fieldset">
                        <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                        {foodTypes.map((item) => (

                            <FormControlLabel
                                key={item.value}
                                value={item.value}
                                control={<Radio  />}
                                label={item.label}
                            />
                        ))}
                        </RadioGroup>
                    </FormControl>
                </div>

                <Divider/>

                <div>
                   <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                    Food Categories
                    </Typography>
                    <FormControl className='py-10 space-y-5' component="fieldset">
                        <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                        {categories.map((item) => (

                            <FormControlLabel
                                key={item}
                                value={item}
                                control={<Radio  />}
                                label={item}
                            />
                        ))}
                        </RadioGroup>
                    </FormControl>
                </div>
             </div>
           </div>

           <div className='space-y-5 lg:w-[80%] lg:pl-10'>
               {menu.map((item)=><MenuCard/>)}
            </div>
        </section>

    </div>
  )
}
