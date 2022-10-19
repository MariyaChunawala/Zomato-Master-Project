// dotenv 
require("dotenv").config();

// Libraries
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import ConnectDB from './Database/connection';
import Auth from './API/Auth';

const app = express();

// Application Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

app.use("/auth", Auth)

app.get("/", (request, response) => {
    return response.json({ message: "Setup successfully" })
})

app.listen(3000, ConnectDB().
    then(() => console.log("Connection...")).
    catch(() => console.log("Server is running but daabase connection is failed")));