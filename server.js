import express, { json } from 'express';
import { mongoose } from 'mongoose';
import { config } from 'dotenv';
import routesFn from './routes/index.js';
import cors from'cors';


config();

const server = express();
server.use(cors());

server.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'self'; connect-src 'self' *;");
    next();
});  

server.use(json());

routesFn(server);

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected to DB") 
    server.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))
})
.catch(err => console.error(err))

