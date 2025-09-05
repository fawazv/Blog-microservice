import { NextFunction } from "express";

import jwt from 'jsonwebtoken'

const JWT_SECRET = '_jwt_secret'

export const authMiddleWare = (req:any,res:any,next:NextFunction)=>{
    
    let aa = req.headers.authorization
    console.log(aa,'aa =====     auth middleware');
    
    const token = req.headers.authorization?.split(' ')[1]
    console.log(token,'token in auth middle ware ');
    
    if(!token){
        console.log('how its haapend .....');
        return res.json({message:'Autherization failed;no token provided'})
    }
    try {
        console.log('its enter to try catch block ');
        
        const decoded =  jwt.verify(token,JWT_SECRET)as {id:string,email:string}
        console.log(decoded,'decoded in auth middlewarew');
        
        req.userId = decoded.id
        console.log(req.userId,'req.userId ----   in auth middleware');
        
        next()
    } catch (error) {
        res.status(403).json({ message: 'Authentication failed: Invalid token' });
    }
}