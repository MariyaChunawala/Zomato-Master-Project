import React from 'react';
import Slider from 'react-slick';

// Component
import { NextArrow, PrevArrow } from '../CarousalArrows';

const DeliverySmCard = (props) => {
    return (
        <>
            <div className='lg:hidden bg-white rounded-md md:w-56'>
                <div className='w-full h-28'>
                    <img src={props.image}
                        alt='Food'
                        className='w-full h-full object-cover rounded-full'
                    />
                </div>
                <div>
                    <h3 className='text-base my-2 font-medium text-center'>
                        {props.title}
                    </h3>
                </div>
            </div>
        </>
    )
}

const DeliveryLgCard = (props) => {
    return (
        <>
            <div className='hidden lg:block w-48 h-48'>
                <div className='w-36 h-36'>
                    <img src={props.image}
                        alt='Food'
                        className='w-full h-full object-cover rounded-full shadow-lg'
                    />
                </div>
                <div className='w-36'>
                    <h3 className='text-lg my-2 font-medium text-center'>
                        {props.title}
                    </h3>
                </div>
            </div>
        </>
    )
}

const DeliveryCategory = (props) => {
    return (
        <>
            <DeliverySmCard {...props} />
            <DeliveryLgCard {...props} />
        </>
    )
}

const DeliveryCarousal = () => {
    const categories = [
        {
            image: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
            title: "Pizza",
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
            title: "Thali",
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
            title: "Biryani",
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
            title: "Chicken",
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
            title: "Burger",
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
            title: "Sandwich",
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png",
            title: "Chaat",
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
            title: "Dosa",
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
            title: "Rolls",
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
            title: "Paratha",
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
            title: "Noodles",
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png",
            title: "Fries",
        },
    ];

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <>
            <h1 className='text-xl font-semibold mb-4 lg:text-2xl lg:mb-8'>
                Inspiration for your first order
            </h1>
            <div className='lg:hidden flex flex-wrap justify-between gap-3'>
                {categories.map((food) => (
                    <DeliveryCategory {...food} />
                ))}
            </div>
            <div className='hidden lg:block '>
                <Slider {...settings} >
                    {categories.map((food) => (
                        <DeliveryCategory {...food} />
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default DeliveryCarousal;