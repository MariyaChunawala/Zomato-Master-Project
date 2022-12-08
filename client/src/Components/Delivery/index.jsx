import React from 'react';

// Components
import RestaurantCard from '../RestaurantCard';
import Brand from './Brand';
import DeliveryCarousal from './DeliveryCarousal';

const Delivery = () => {
    return (
        <>
            <DeliveryCarousal />
            <Brand />
            <RestaurantCard />
        </>
    )
}

export default Delivery;