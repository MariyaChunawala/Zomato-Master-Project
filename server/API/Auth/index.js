// Import Libraries
import express from 'express';
import passport from 'passport';

// Import Models
import { UserModel } from '../../Database/user/index';

// Validation
import { ValidateSignin, ValidateSignup } from '../../validation/auth';

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
        await ValidateSignup(request.body.credentials);

        await UserModel.findByEmailAndPhone(request.body.credentials);

        const newUser = await UserModel.create(request.body.credentials);

        const token = newUser.generateTokens();

        return response.status(200).json({ token });

    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
})

/* 
    Route: /signin
    Description: signin with email and password
    Parameters: NONE
    Access: Public
    Method: POST
*/
Router.post('/signin', async (request, response) => {
    try {
        await ValidateSignin(request.body.credentials);

        const user = await UserModel.findByEmailAndPassword(request.body.credentials);

        const token = user.generateTokens();

        return response.status(200).json({ token });

    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
})

/* 
    Route: /google
    Description: Google signin
    Parameters: NONE
    Access: Public
    Method: GET
*/
Router.get("/google", passport.authenticate("google", {
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
    ]
}))

/* 
    Route: /google/callback
    Description: Google signin callback
    Parameters: NONE
    Access: Public
    Method: GET
*/
Router.get("/google/callback", passport.authenticate("google", { failureRedirect: '/' }),
    (request, response) => {
        return response.json({ token: request.session.passport.user.token });
    }
)

export default Router;