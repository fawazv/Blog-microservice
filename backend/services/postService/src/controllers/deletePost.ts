import { Request,Response } from "express"
import Post from "../model/postModel"


export default async(req:Request,res:Response)=>{
    const {id} = req.params
    const authorId = (req as any).userId
    try {
        const post = await Post.findById(id)
        if(!post){
            return res.json({message:"post not found"})
        }
        if(post.author.toString()!==authorId){
            return res.json({message:"you are unauthorized"})
        }
        await Post.findByIdAndDelete(id)
        return res.status(200).json({message:"post deleted successfully"})
    } catch (error) {
        console.error('Error founded in delete post',error);
    }
}