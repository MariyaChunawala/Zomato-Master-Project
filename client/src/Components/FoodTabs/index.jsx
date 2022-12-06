import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { IoFastFoodOutline } from 'react-icons/io5';
import classnames from 'classnames';

const MobileTabs = () => {
    const [selectedType, setType] = useState('');
    const allTypes = [
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
    ];
    return <>
        <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-evenly md:justify-evenly text-gray-500 border">
            {allTypes.map((items) => (
                < Link to={`/${items.id}`}
                    onClick={() => { setType(items.id) }}>
                    <div className={classnames('w-full flex flex-col items-center text-xl border ', {
                        'relative text-zomato-500': selectedType === items.id
                    })}>
                        {items.icon}
                        <h5 className='text-sm'>{items.name}</h5>
                        <div className={(selectedType === items.id) ? "absolute -top-3 w-full border-t-2 border-zomato-500" : undefined} />
                    </div>
                </Link>
            ))}
        </div>
    </>
}
const LargeTabs = () => {
    const [selectedType, setType] = useState("");
    const allTypes = [
        {
            id: "delivery",
            imageDefault: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
            imageActive: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
            name: 'Delivery',
            activeColor: "yellow"
        },
        {
            id: "diningout",
            imageDefault: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp",
            imageActive: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
            name: 'Dining Out',
            activeColor: "blue"
        },
    ];
    return <>
        <div className='hidden lg:flex gap-14 w-3/4 mx-auto'>
            {allTypes.map((items) => (
                <Link to={`/${items.id}`} onClick={() => { setType(items.id) }}>
                    <div className={classnames('flex items-center gap-3 pb-2 transition duration-700 ease-in-out', {
                        "border-b-2 border-zomato-200": selectedType === items.id,
                    })}>
                        <div className={classnames(`w-14 h-14 bg-gray-200 p-3 rounded-full`, {
                            [`bg-${items.activeColor}-200`]: selectedType === items.id,
                        })}>
                            <img src={selectedType === items.id ? items.imageActive : items.imageDefault}
                                alt='Delivery'
                                className='w-full h-full'
                            />
                        </div>
                        <h3 className={(selectedType === items.id) ? "text-zomato-500 text-lg font-semibold" : "text-gray-700 text-lg font-semibold"}>
                            {items.name}
                        </h3>
                    </div>
                </Link>
            ))}
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