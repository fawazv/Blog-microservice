import { Request,Response } from "express"
import Comment from "../model/commentModel"

export default async(req:Request,res:Response)=>{
    try {
        const { commentId } = req.params;
        const userId = (req as any).userId

        const comment = await Comment.findOneAndDelete({ _id: commentId, userId });
        if (!comment) return res.status(403).json({message: 'Unauthorized' });

        res.status(200).json({ message: 'Comment deleted' });
    } catch (error) {
        console.error('Error founded in deleting comment',error);
        
    }
}