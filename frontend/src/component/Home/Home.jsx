import React, { useEffect } from 'react'
import './Home.css'
import { MultiItemCarousel } from './MultiItemCarousel'
import RestaurantCard from '../Restaurant/RestaurantCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRestaurantsAction } from '../State/Restaurant/Action'

//const restaurants = [1, 1, 1, 1, 1, 1]
export const Home = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt")

    // get all restaurants on home page
    const { restaurant } = useSelector(store => store)
    useEffect(() => {
        dispatch(getAllRestaurantsAction(jwt))
    }, [])


    return (
        <div className='pb-10 '>
            <section className='banner z-50 relative flex flex-col  justify-center items-center'>

                <div className='w-[50vw] z-10 text-center'>
                    <p className=' font-serif text-2xl lg:text-5xl font-bold z-10 py-5'>
                    Authentic Bites</p>
                    <p className='z-10  text-3xl lg:text-3xl text-gray-300'>Bringing You the Taste of Home, Anywhere</p>
                </div>
                <div className='cover absolute top-0 left-0 right-0>'>

                </div>
                <div className='fadout'>

                </div>
            </section>

            <section className='p-10 lg:py-10 px-20'>
                <p className='text-4xl font-semibold text-white py-3 pb-10 text-center'>Top Meals</p>
                <MultiItemCarousel />
            </section>
            <section className='px-5  lg:px-20 pt-10'>
                <h1 className='text-3xl font-semibold text-white pb-8 text-center'>Order from Favourites</h1>
                <div className='flex flex-wrap items-center justify-around gap-5'>
                    {
                        restaurant.restaurants.map((item, index) => <RestaurantCard key={index} item={item} />)
                    }
                </div>
            </section>

        </div>
    )
}

