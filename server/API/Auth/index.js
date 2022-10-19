// Import Libraries
import express from 'express';

// Import Models
import { UserModel } from '../../Database/user/index';

const Router = express.Router();

/* 
    Route: /signup
    Description: Register New User
    Parameters: NONE
    Access: Public
    Method: POST
*/
Router.post('/signup', async (request, response) => {
    try {
        await UserModel.findByEmailAndPhone(request.body.credentials);

        const newUser = await UserModel.create(request.body.credentials);

        const token = newUser.generateTokens();

        return response.status(200).json({ token });

    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
})

export default Router;