import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { RiSearch2Line } from 'react-icons/ri';

const MobileNav = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className='w-32'>
                <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*'
                    alt='Logo'
                    className='w-full h-full'
                />
            </div>
            <div className='flex items-center gap-3'>
                <button className='bg-zomato-400 text-white px-3 py-2 rounded-full'>
                    Use App
                </button>
                <span className='border p-2 border-gray-500 text-zomato-300 rounded-full'>
                    <FaUserAlt />
                </span>
            </div>
        </div>
    )
}

const LargeNav = () => {
    return (
        <>
            <div className='flex items-center justify-between w-full gap-4 lg:gap-8 lg:w-3/4 mx-auto'>
                <div className='w-32'>
                    <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*'
                        alt='Logo'
                        className='w-full h-full'
                    />
                </div>
                <div className='w-full bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded'>
                    <div className='flex items-center gap-2 border-r-2 border-gray-300 pr-2'>
                        <span className='text-zomato-400'>
                            <HiLocationMarker />
                        </span>
                        <input type="text" placeholder='Bharuch' className='focus:outline-none' />
                        <span>
                            <IoMdArrowDropdown />
                        </span>
                    </div>
                    <div className='flex items-center gap-2 w-full'>
                        <RiSearch2Line />
                        <input type='search' placeholder='Search for restaurant, cuisine or a dish' className='w-full focus:outline-none' />
                    </div>
                </div>
                <div className='flex gap-4'>
                    <button className='text-gray-500 text-xl hover:text-gray-800'>
                        Login
                    </button>
                    <button className='text-gray-500 text-xl hover:text-gray-800'>
                        Signup
                    </button>
                </div>
            </div>
        </>
    )
}

const Navbar = () => {
    return (
        <nav className='p-4 bg-white shadow-md'>
            <div className='lg:hidden'>
                <MobileNav />
            </div>
            <div className='hidden lg:block'>
                <LargeNav />
            </div>
        </nav>
    )
}

export default Navbar;