
import { Request,Response } from "express";
import Post from "../model/postModel";

export default async(req:Request,res:Response)=>{
    try {
        const {id}  = req.params
        const {title,content} = req.body
        const authorId = (req as any).userId
        const post = await Post.findById(id)
        if(!post){
            return res.json({message:'Post not found'})
        }
        if(post?.author.toString()!==authorId){
            return res.json({message:'you are unauthorized'})
        }
        const update = await Post.findByIdAndUpdate(id,{title,content})
        return res.json({message:"updation completed"})
    } catch (error) {
        console.error('Error founding in update post',error);
    }
}