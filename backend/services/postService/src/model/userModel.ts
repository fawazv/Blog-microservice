

import mongoose,{Document,Schema} from "mongoose";

interface IUser extends Document{
    _id:mongoose.Types.ObjectId;
    name:string;
    email:string;
    password:string;
}

const userSchema = new Schema<IUser>({
    _id: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true 
    },
    name:{
        type:String
        // requrired:true
    },
    email:{
        type:String
        // required:true
    },
    password:{
        type:String,
        required:true
    }
})

const User = mongoose.model<IUser>('User',userSchema)

export default User