import React from 'react'
import './Home.css'
import { MultiItemCarousel } from './MultiItemCarousel'
import RestaurantCard from '../Restaurant/RestaurantCard'

const restaurant=[1,1,1,1,1,1]
export const Home = () => {
  return (
    <div className='pb-10 '>
        <section className='banner z-50 relative flex flex-col items-center justify-center items-center'>

            <div className='w-[50vw] z-10 text-center'>
                   <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>
                    Food Wheels</p>
                   <p className='z-10 text-greay-300 text-xl lg:text-4xl'> You get the real taste delivered Home</p>
            </div>
            <div className='cover absolute top-0left-0 right-0>'>
             
            </div>
            <div className='fadout'>

            </div>
        </section>

        <section className='p-10 lg:py-10 px-20'>
            <p className='text-2xl font-semibold text-gray-400 py-3 pb-10'>Top Meals</p>
            <MultiItemCarousel/>
        </section>
        <section className='px-5  lg:px-20 pt-10'>
            <h1 className='text-2xl font-semibold text-gray-400 pb-8'>Order from Favourites</h1>
            <div className='flex flex-wrap items-center justify-around gap-5'>
                {
                    restaurant.map((item) => <RestaurantCard/>)
                }
            </div>
        </section>
        
    </div>
  )
}

