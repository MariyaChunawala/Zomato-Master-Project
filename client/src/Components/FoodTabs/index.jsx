import React from 'react';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { BiDrink } from 'react-icons/bi';
import { IoNutritionOutline, IoFastFoodOutline } from 'react-icons/io5'

const MobileTabs = () => {
    return <>
        <div className='lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between border text-gray-500 md:justify-evenly'>
            <div className='w-full flex flex-col items-center text-2xl font-medium hover:text-gray-800'>
                <RiShoppingBag3Line />
                <h5 className='text-sm'>Delivery</h5>
            </div>
            <div className='w-full flex flex-col items-center text-2xl font-medium hover:text-gray-800 '>
                <IoFastFoodOutline />
                <h5 className='text-sm'>Dinning Out</h5>
            </div>
            <div className='w-full flex flex-col items-center text-2xl font-medium hover:text-gray-800'>
                <BiDrink />
                <h5 className='text-sm'>Night Life</h5>
            </div>
            <div className='w-full flex flex-col items-center text-2xl font-medium hover:text-gray-800'>
                <IoNutritionOutline />
                <h5 className='text-sm'>Nutrition</h5>
            </div>
        </div>
    </>
}
const LargeTabs = () => {
    return <>
        <div className='hidden lg:flex gap-14 w-3/4 mx-auto'>
            <div className='flex items-center gap-3'>
                <div className='w-14 h-14 bg-gray-200 p-3 rounded-full'>
                    <img src='https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png'
                        alt='Delivery'
                        className='w-full h-full'
                    />
                </div>
                <h3 className='text-gray-700 text-lg font-semibold'>Delivery</h3>
            </div>
            <div className='flex items-center gap-3'>
                <div className='w-14 h-14 bg-gray-200 p-3 rounded-full'>
                    <img src='https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp'
                        alt='Dining Out'
                        className='w-full h-full'
                    />
                </div>
                <h3 className='text-gray-700 text-lg font-semibold'>Dining Out</h3>
            </div>
        </div>
    </>
}

const FoodTabs = () => {
    return (
        <>
            <div>
                <MobileTabs />
                <LargeTabs />
            </div>
        </>
    )
}

export default FoodTabs;