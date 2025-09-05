import mongoose,{Schema,Document} from "mongoose";

interface IPost extends Document{
    title:string;
    content:string;
    author:mongoose.Types.ObjectId
}

const postSchema:Schema = new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},
{timestamps:true})

const Post = mongoose.model<IPost>('Post',postSchema)

export default Post