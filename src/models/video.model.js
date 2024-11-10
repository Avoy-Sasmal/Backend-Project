import mongoose,{Schema} from "mongoose"
//stp-1
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
const videoSchema = new Schema({
videoFile:{
type: String,// cloudnary url
required:true
},
thumbnail:{
type:String,// cloudnary
required:true
},
title:{
type:String,// 
required:true
},
description:{
type:String,// 
required:true
},
duration:{
type:Number,//
required:true
},
views:{
  type:Number,
  default:0
},
isPublished:{
  type:Boolean,
  default:true
},
owner:{
  type:Schema.Types.ObjectId,
  ref:"User"
},


},{timestamps:true})
//stp-2
videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video",videoSchema)