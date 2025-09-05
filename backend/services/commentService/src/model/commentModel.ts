import mongoose, { Document, Schema } from 'mongoose';


interface IComment extends Document {
    postId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

const CommentSchema: Schema = new Schema({
        postId: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: 'Post' 
        },
        userId: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: 'User'  
        },
        content: {
            type: String,
            required: true
        }
    },{
        timestamps: true 
    }
);


const Comment = mongoose.model<IComment>('Comment', CommentSchema);
export default Comment;
