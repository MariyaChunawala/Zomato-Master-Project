import React from 'react';
import Slider from 'react-slick';

// Component
import { NextArrow, PrevArrow } from '../CarousalArrows';

const BrandCard = (props) => {
    return (
        <>
            <div className='w-20 h-20 md:w-28 md:h-28'>
                <img
                    src={props.image}
                    alt="Brand"
                    className='w-full h-full object-contain'
                />
            </div>
            <div className='w-28'>
                <h3 className='text-lg my-2 font-medium text-center md:text-xl'>
                    {props.title}
                </h3>
            </div>
        </>
    )
}

const Brand = (props) => {
    const logos = [
        {
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625165036.png?output-format=webp",
            title: "McDonald's",
        },
        {
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/1b51d0bca33e149302056def63fb5fa3_1536924805.png?output-format=webp",
            title: "La Pino's Pizza",
        },
        {
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1583218253.png?output-format=webp",
            title: "Domino's Pizza",
        },
        {
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/c4e5d79a73034d7615dd1f973f05a02a_1642259612.png?output-format=webp",
            title: "Subway",
        },
        {
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/03599494c6aa23782f85b9dc127548d8_1605092896.png?output-format=webp",
            title: "Gwalia Sweets & Fast Food",
        },
        {
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187636.png?output-format=webp",
            title: "Burger King",
        },
        {
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/246cce69e468341e27e835f5bb3a535b_1568093471.png?output-format=webp",
            title: "Jay Bhavani Vadapav",
        },
        {
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/55cc692dd1897ed3cfd7a60d2789c7fe_1611332688.png?output-format=webp",
            title: "1994 - The HOCCO kitchen",
        },
        {
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/45137b90df2f1154a8766b00c03c8fc3_1655799947.png?output-format=webp",
            title: "Faasos - Wraps & Rolls",
        },
        {
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/1f5520773f9d430b15f535d1098d013a_1611305222.png?output-format=webp",
            title: "Food On Way",
        },
    ];
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <h1 className='text-xl font-semibold my-4 lg:text-2xl lg:mb-8'>
                Top Brand For You
            </h1>
            <div className='mx-2'>
                <Slider {...settings} >
                    {logos.map((props) => (
                        <BrandCard {...props} />
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default Brand;