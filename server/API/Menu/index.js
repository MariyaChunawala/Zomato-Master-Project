import express from 'express';

import { ImageModel, MenuModel } from '../../Database/allModels';

import { ValidateRestaurantId } from '../../validation/food';

const Router = express.Router();
/* 
    Route: /list
    Description: Get all list Menu based on restaurant id
    Parameters: _id
    Access: Public
    Method: GET
*/
Router.get("/list/:_id", async (request, response) => {
    try {
        await ValidateRestaurantId(request.params);
        const { _id } = request.params;
        const menus = await MenuModel.findOne({ _id });
        return response.status(200).json({ menus });
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
})

/* 
    Route: /image
    Description: Get all image Menu based on restaurant id
    Parameters: _id
    Access: Public
    Method: GET
*/
Router.get("/image/:_id", async (request, response) => {
    try {
        await ValidateRestaurantId(request.params);
        const { _id } = request.params;
        const menus = await ImageModel.findOne({ _id });
        return response.status(200).json({ menus });
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
});

export default Router;