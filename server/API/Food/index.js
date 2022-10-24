import express from 'express';

import { FoodModel, RestaurantModel } from '../../Database/allModels';

const Router = express.Router();
/* 
    Route: /r
    Description: Get all food based on particular restaurant
    Parameters: id
    Access: Public
    Method: GET
*/
Router.get("/r/:_id", async (request, response) => {
    try {
        const { _id } = request.params;
        const foods = await FoodModel.find({ restaurant: _id });
        return response.status(200).json({ foods });
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
});

/* 
    Route: /c
    Description: Get all food based on category
    Parameters: category
    Access: Public
    Method: GET
*/
Router.get("/r/:category", async (request, response) => {
    try {
        const { category } = request.params;
        const foods = await FoodModel.find({ category: { $regex: category, $options: "i" } });
        if (!foods) {
            return response.status(404).json({ error: `Food Not Found!` })
        }
        return response.status(200).json({ foods });
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
});

export default Router;