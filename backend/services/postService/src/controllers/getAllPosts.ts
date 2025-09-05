import Post from "../model/postModel";
import { Request,Response } from "express";

export default async (req:Request,res:Response)=>{
    try {
        const posts = await Post.find().populate('author','name email')
        return res.json(posts)
    } catch (error) {
        console.error('Error fouinded in get all post ',error);
    }
}