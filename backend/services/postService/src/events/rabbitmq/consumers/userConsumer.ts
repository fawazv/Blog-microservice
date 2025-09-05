import { getChannel } from "../../../config/rabbitmq";
import User from "../../../model/userModel";

const user_queue = 'user_queue'

export const recieveUserFromQueue = async () => {
    try { 
        let channel = getChannel() 
         channel.assertQueue(user_queue, { durable: false })
        channel.consume(user_queue, async(msg: any) => {
            if (msg) {
                const messageContent = JSON.parse(msg.content.toString())
                console.log('[x] recieved %s', messageContent);
                const newUser = new User({
                    _id:messageContent._id,
                    name:messageContent.name,
                    email:messageContent.email,
                    password:messageContent.password
                })
                await newUser.save()
                channel.ack(msg)
            }
        }, { noAck: false })
        console.log(`Waiting for messages in ${user_queue}`);
    } catch (error) {
        console.error('Failed to receive message from queue:', error);
    }
}