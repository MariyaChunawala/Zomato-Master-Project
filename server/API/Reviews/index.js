import express from 'express';

import { ReviewModel } from '../../Database/allModels';

const Router = express.Router();

/* 
    Route: /new
    Description: Add review/ ratings
    Parameters: None
    Body: Review Data
    Access: Public
    Method: POST
*/
Router.post("/new", async (request, response) => {
    try {
        const { reviewData } = request.body;
        await ReviewModel.create(reviewData);
        return response.status(200).json({ review: "Successfully Created Review." });
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
});

/* 
    Route: /delete
    Description: Delete review/ ratings
    Parameters: _id
    Body: None
    Access: Public
    Method: DELETE
*/
Router.delete("/delete/:_id", async (request, response) => {
    try {
        const { _id } = request.params;
        await ReviewModel.findByIdAndDelete(_id);
        return response.status(200).json({ review: "Successfully Delete the Review." });

    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
})

export default Router;