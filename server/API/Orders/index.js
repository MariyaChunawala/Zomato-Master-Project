import express from 'express';
import passport from 'passport';

import { OrderModel } from '../../Database/allModels';

const Router = express.Router();

/* 
    Route: /
    Description: Get all orders based on id
    Parameters: _id
    Access: Public
    Method: GET
*/
Router.get("/:_id", passport.authenticate('jwt', { session: false }), async (request, response) => {
    try {
        const { _id } = request.params;
        const getAllOrders = await OrderModel.findOne({ user: _id });
        if (!getAllOrders) {
            return response.status(404).json({ error: "User Not Found" });
        }
        return response.status(200).json({ orders: getAllOrders });

    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
});

/* 
    Route: /new
    Description: Add new Orders
    Parameters: _id
    Access: Public
    Method: POST
*/
Router.post("/new/:_id", async (request, response) => {
    try {
        const { _id } = request.params;
        const { orderDetails } = request.body;
        const addNewOrder = await OrderModel.findOneAndUpdate({
            user: _id,
        }, {
            $push: { orderDetails },
        }, {
            new: true
        });

        return response.status(200).json({ order: addNewOrder });
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
});

export default Router;
