import mongoose from "mongoose"
const shortUrlSchema=new mongoose.Schema({
    full_url:{
        type:String,
        required:true
    },
    short_url:{
        type:String,
        index:true,
        required:true,
        unique:true
    },
    clicks:{
        type:Number,
        required:true,
        default:0
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true})

const urlSchema=mongoose.model("ShortUrlSchema",shortUrlSchema)
export default urlSchema
