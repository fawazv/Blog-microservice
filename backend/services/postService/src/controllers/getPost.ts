import { Request,Response } from "express";
import Post from "../model/postModel";


export default async(req: Request,res: Response)=>{
    try {
        const postId = req.params.id
        const post  = await Post.findById(postId).populate('author','name email')
        if(!post){
            return res.status(400).json({message:"Post not found"})
        }
        return res.status(200).json(post)
    } catch (error) {
        console.error('Error founded in fetching post',error);
    }
}