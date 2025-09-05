import express from 'express'
import mongoose from 'mongoose'
import { connectRabbitMQ } from './config/rabbitmq';

mongoose.connect('mongodb://localhost:27017/blogPost')
    .then(() => {
        console.log('mongodb connected');
    })
    .catch((err) => {
        console.error('mongodb connection error');
    })
connectRabbitMQ().then(() => {
    recieveUserFromQueue()
})
const app = express()

import postRoute from './routes/postRoute';
import { recieveUserFromQueue } from './events/rabbitmq/consumers/userConsumer';

app.use(express.json())

app.use('/', postRoute)

app.listen(5002, () => console.log('server running on http://localhost:5002'))