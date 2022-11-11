import joi from 'joi';

export const ValidateRestaurantId = (restaurantID) => {
    const schema = joi.object({
        _id: joi.string().required(),
    })
    return schema.validateAsync(restaurantID);
}

export const ValidateCategory = (category) => {
    const schema = joi.object({
        category: joi.string().required(),
    })
    return schema.validateAsync(category);
}