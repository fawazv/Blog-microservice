import { Request,Response } from "express";
import Comment from "../model/commentModel";


export default async(req:Request,res:Response)=>{
    try {
        const {postId}= req.params;
        
        const {content}= req.body
        const userId = (req as any).userId
        console.log(postId,'post id ', userId,'    userId   ',content,'    content  ');
        
        const newComment = new Comment({
            postId,
            userId,
            content
        })
        await newComment.save()
        res.json(newComment)
    } catch (error) {
        console.error('Error founded in create comment',error);
    }
}