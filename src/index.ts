import express from 'express';
require('dotenv').config();
import { sequelize } from './config/dbConnect';
import authRouter from './routes/authRoute';
import userRouter from './routes/userRoute';
import footerRouter from './routes/footerRoute';
const bodyParser = require("body-parser");

const app = express();
const cors = require('cors');
const compression = require('compression');

const port: string | undefined = process.env.APP_PORT;
const base: string = "/api"

app.use(compression());
app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.use(base, authRouter);
app.use(base, userRouter);
app.use(base, footerRouter);

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