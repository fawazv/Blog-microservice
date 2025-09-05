import mongoose,{Schema,Document} from 'mongoose'

interface IUser extends Document{
    name:string,
    email:string,
    password:string
}

const userSchema:Schema = new Schema<IUser>({
    name:{
        type:String,
        reqiured:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const User =  mongoose.model<IUser>('User',userSchema)
export default User