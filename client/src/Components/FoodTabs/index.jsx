import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { BiDrink } from 'react-icons/bi';
import { IoNutritionOutline, IoFastFoodOutline } from 'react-icons/io5'

const MobileTabs = () => {
    const [allTypes, setAllTypes] = useState([
        {
            id: "delivery",
            icon: <RiShoppingBag3Line />,
            name: 'Delivery',
        },
        {
            id: "diningout",
            icon: <IoFastFoodOutline />,
            name: 'Dining Out',
        },
        {
            id: "nightlife",
            icon: <BiDrink />,
            name: 'Night Life',
        },
        {
            id: "nutrition",
            icon: <IoNutritionOutline />,
            name: 'Nutrition',
        },
    ])
    const { type } = useParams();
    return <>
        <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border">
            {allTypes.map((items) => (

                <Link to={`/${items.id}`}>
                    <div className={type === items.id ?
                        'relative w-full flex flex-col items-center text-xl text-zomato-500 '
                        : 'w-full flex flex-col items-center text-xl'}>
                        {items.icon}
                        <h5 className='text-sm'>{items.name}</h5>
                        <div className={type === items.id ? "absolute -top-3 w-full border-t-2 border-zomato-500" : undefined} />
                    </div>
                </Link>
            ))}
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