import amqp,{Channel,Connection} from 'amqplib'

let channel: Channel
let connection:Connection

export const connectRabbitMQ = async () => {
    try {
        connection = await amqp.connect('amqp://localhost')
        console.log('rabbit mq connected');
        channel = await connection.createChannel();
    } catch (error) {
        console.error('Failed to connect to rabbitmq',error);   
    }
}

export const getChannel = () => {
    if (!channel) {
        throw new Error('RabbitMQ channel is not initialized');
    }
    return channel;
};