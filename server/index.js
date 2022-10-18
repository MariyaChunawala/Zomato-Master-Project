import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

// Application Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

app.get("/", (request, response) => {
    return response.json({ message: "Setup successfully" })
})

app.listen(3000, () => console.log("Connection..."));