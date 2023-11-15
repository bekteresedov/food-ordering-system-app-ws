import express from 'express';
require('dotenv').config();
import { sequelize } from './config/dbConnect';
import authRouter from './routes/authRoute';
const bodyParser = require("body-parser");

const app = express();

const port: string | undefined = process.env.APP_PORT;
const base: string = "/api"
app.use(express.json());
app.use(base, authRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

sequelize
    .sync()
    .then(() => {
        console.log('PostgreSQL database connected');
    })
    .catch((err: any) => {
        console.error('Unable to connect to the database:', err);
    });