import { Request, Response } from 'express';
import bcrypt from 'bcryptjs'
import User from "../model/userModel"
import sendUserToQueue from '../events/rabbitmq/publisher/userPublisher';


export default async (req: Request, res: Response) => {

    console.log('its here in sign up page');
    
    const { name, email, password } = req.body;
    console.log(name,'name',email,'email',password,'passowrd');
    try {
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        await sendUserToQueue(newUser)
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error founded in user sign up ',error)
        // res.status(500).json({ message: 'Server error', error: err.message });
    }
};