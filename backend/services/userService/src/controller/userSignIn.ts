import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../model/userModel';


const JWT_SECRET = '_jwt_secret';
export default async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
       
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: 'User not found' });
        }
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: existingUser._id, email: existingUser.email }, JWT_SECRET, { expiresIn: '1h' });
        console.log(token,'token in sign in ');
        console.log('  ---------------     ');
        console.log('req.headers_______',req.headers,'_______req.headers');
        
        console.log(req.headers.authorization,'req.headers.authorization .......');
        
        
        res.status(200).json({ token, user: existingUser });
    } catch (error) {
        console.error('Error founded in sign in ',error)
    }
};
