import React from 'react'

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

export default DeliveryCategory;