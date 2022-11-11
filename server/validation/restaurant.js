import joi from 'joi';

export const ValidateRestaurantCity = (restaurantCity) => {
    const schema = joi.object({
        city: joi.string().required(),
    })
    return schema.validateAsync(restaurantCity);
}

export const ValidateRestaurantSearchString = (restaurantSearchString) => {
    const schema = joi.object({
        searchString: joi.string().required(),
    })
    return schema.valSearchStringateAsync(restaurantSearchString);
}