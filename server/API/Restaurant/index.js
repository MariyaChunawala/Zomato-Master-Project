import express from 'express';

import { RestaurantModel } from '../../Database/allModels';

const Router = express.Router();
/* 
    Route: /
    Description: Get all the restaurant based on city
    Parameters: NONE
    Access: Public
    Method: GET
*/
Router.get("/", async (request, response) => {
    try {
        const { city } = request.query;
        const restaurant = await RestaurantModel.find({ city });
        return response.status(200).json({ restaurant });
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
});
/* 
    Route: /
    Description: Get individual the restaurant based on id
    Parameters: id
    Access: Public
    Method: GET
*/
Router.get("/:_id", async (request, response) => {
    try {
        const { id } = request.params;
        const restaurant = await RestaurantModel.findOne({ _id });
        if (!restaurant)
            return response.status(404).json({ error: "Restaurant Not Found!!!" });
        return response.status(200).json({ restaurant });
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
});

/* 
    Route: /search
    Description: Get restaurant details based on search string
    Parameters: NONE
    Body: SearchString
    Access: Public
    Method: GET
*/
Router.get('/search', async (request, response) => {
    try {
        const { searchString } = request.body;
        const restaurant = await RestaurantModel.find({
            name: { $regex: searchString, $options: "i" }
        });
        if (!restaurant)
            return response.status(404).json({ error: `No Restaurant matched with ${searchString}` });
        return response.status(200).json({ restaurant });
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
});
export default Router;