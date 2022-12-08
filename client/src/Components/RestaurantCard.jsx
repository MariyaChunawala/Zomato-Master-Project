import React from 'react'
import { AiTwotoneStar } from "react-icons/ai"

const RestaurantCard = () => {
    return (
        <>
            <div className='bg-white p-2 w-full rounded-2xl transition duration-700 ease-in-out hover:shadow-lg md:w-1/2 lg:w-1/3'>
                <div className='w-full h-56 lg:h-64 relative'>
                    <img
                        src='https://b.zmtcdn.com/data/pictures/chains/9/18438909/8ac67f799c14cd3b586e18e48eaa00f7_o2_featured_v2.jpg?output-format=webp'
                        alt='Food'
                        className='w-full h-full rounded-2xl'
                    />
                    <div className='absolute w-full bottom-2'>
                        <span className='bg-white bg-opacity-75 px-3 py-1 font-semibold rounded mr-3 float-right'>22 min</span>
                    </div>
                </div>
                <div className='flex flex-col my-2 gap-2'>
                    <div className='flex items-center justify-between'>
                        <h4 className='text-xl font-medium'>La Pino'z Pizza</h4>
                        <span className='bg-green-800 text-white py-1 px-2 rounded flex items-center'>4.2 <AiTwotoneStar /> </span>
                    </div>
                    <div className='flex items-center justify-between text-gray-600'>
                        <p>Pizza, Fast Food</p>
                        <p>₹150 for one</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RestaurantCard;