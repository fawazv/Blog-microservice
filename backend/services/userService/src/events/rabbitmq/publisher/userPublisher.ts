
import { getChannel } from "../../../config/rabbitmq";

let user_queue = 'user_queue'

const sendUserToQueue = async(msg: any) => {
    try {
        let channel = getChannel()
        await channel.assertQueue(user_queue, { durable: false })
        const data = JSON.stringify(msg)
        channel.sendToQueue(user_queue, Buffer.from(data))

        console.log(" [x] Sent %s", data);  
    } catch (error) {
        console.error('Failed to send message to queue:', error);
    }

}

export default sendUserToQueue