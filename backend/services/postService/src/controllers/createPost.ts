import { Request,Response } from "express"
import Post from "../model/postModel";

export default async(req:Request,res:Response)=>{
    try {
        const {title,content}= req.body
        const authorId = (req as any).userId
        const newPost = new Post({title,content,author:authorId})
        await newPost.save()
        return res.json(newPost)
    } catch (error) {
        console.error('Error updating data',error);
        
    }
}