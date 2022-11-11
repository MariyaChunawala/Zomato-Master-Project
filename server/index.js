// dotenv 
require("dotenv").config();

// Libraries
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import passport from 'passport';
import session from 'express-session';

import ConnectDB from './Database/connection';

// Add Microservices Routes
import Auth from './API/Auth';
import Restaurant from './API/Restaurant';
import Food from "./API/Food";
import Menu from "./API/Menu";
import Image from "./API/Image";
import Order from "./API/Orders";
import Reviews from "./API/Reviews";

// Config Files
import googleConfig from './config/google.config';

const app = express();

// Application Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());

googleConfig(passport);

app.use("/auth", Auth);
app.use("/restaurant", Restaurant);
app.use("/food", Food);
app.use("/menu", Menu);
app.use("/image", Image);
app.use("/order", Order);
app.use("/reviews", Reviews);

app.get("/", (request, response) => {
    return response.json({ message: "Setup successfully" })
})

app.listen(4000, ConnectDB().
    then(() => console.log("Connection...")).
    catch(() => console.log("Server is running but database connection is failed")));