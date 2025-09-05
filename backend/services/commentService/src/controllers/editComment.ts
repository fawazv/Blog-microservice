import Comment from "../model/commentModel";
import { Request,Response } from "express";

export default async (req: Request, res: Response) => {
    try {
        console.log('its herer');
        
        const { commentId } = req.params;
        const { content } = req.body;
        const userId = (req as any).userId;
        console.log(commentId,'commentId ',  userId,'userId ', content,'content ');
        
        const comment = await Comment.findOne({ _id: commentId, userId });
        if (!comment) return res.status(403).json({ success: false, message: 'Unauthorized' });

        comment.content = content;
        await comment.save();

        res.status(200).json({ success: true, comment });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error editing comment', error });
    }
};
