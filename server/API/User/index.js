import express from 'express';

import { UserModel } from '../../Database/allModels';

const Router = express.Router();

/* 
    Route: /
    Description: Get user details
    Parameters: _id
    Body: None
    Access: Public
    Method: GET
*/
Router.get("/", async (request, response) => {
    try {
        const { _id } = request.params;
        const getUser = await UserModel.findById(_id);
        if (getUser) {
            return response.status(404).json({ user: "User doesn't exist" });
        }
        return response.status(200).json({ user: getUser });
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
})
/* 
    Route: /update
    Description: Update user details
    Parameters: _id
    Body: UserData
    Access: Public
    Method: PUT
*/
Router.put("/update/:_id", async (request, response) => {
    try {
        const { _id } = request.params;
        const { userData } = request.body;
        const updateUserData = await UserModel.findByIdAndUpdate(_id, {
            $set: userData
        }, {
            new: true
        });
        return response.status(200).json({ user: updateUserData });

    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
})

export default Router;