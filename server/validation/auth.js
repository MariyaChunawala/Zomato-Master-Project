import joi from 'joi';

export const ValidateSignup = (userData) => {
    const schema = joi.object({
        fullname: joi.string().required().min(5),
        email: joi.string().email().required(),
        password: joi.string().min(5),
        address: joi.array().items(joi.object({ details: joi.string(), for: joi.string() })),
        phoneNumber: joi.number(),
    })
    return schema.validateAsync(userData);
}

export const ValidateSignin = (userData) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(5).required(),
    })
    return schema.validateAsync(userData);
}