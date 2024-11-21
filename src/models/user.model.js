import mongoose,{Schema} from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema({
username:{
  type:String,
  required:true,
  unique:true,
  trim:true,
  lowercase:true,
  // dtabase ka searching field true karna hai to index true karna good hai 
  index:true
},
email:{
  type:String,
  required:true,
  unique:true,
  lowercase:true,
  trim:true,
},
fullname:{
  type:String,
  required:true,
  trim: true,
  index:true
},
avatar:{
  typr:String ,//cloudnary Url 
  required: true,
},
coverImage:{
  type: String,//cloudnary url
},
watchHistory:[
  {
    type: Schema.Types.ObjectId,
    ref:"video"
  }
],
// password data base ka andhar jab bhi rakho encrypt karke rakho but agar apna 123 likha aur kuch bada string hai to ya chlng hain ek
password:{
  type:String,
  required:[true,"Password is required "]
},
refreshToken:{
  type:String
}
},{timestamps:true}) // ya hai to createdApp Updated app time mil jayega 


// yaha per agar koi user ake apna data change kare too ya to ber ber password chnage kar dega so that here applied a condition when i send password then only cncryptn
userSchema.pre("save",async function (next) {
  // agar modify nahi hua to hatao 
  if(!this.isModified("password")) return next();
  // aur agar modify hua to change karo 
  this.password =  await bcrypt.hash(this.password,10)
  next()
})
// custom method  check that password is correct or not 
userSchema.method.isPasswordCorrect = async function (password){
  // return true or false 
  return await  bcrypt.compare(password,this.password)
}
// jwt tokens generate here one is for refresh and another for generate 
userSchema.methods.generateAccessToken = function(){//kya kya store karwana chanhte hoo 
   return jwt.sign({
    _id:this._id,// already mongo mai bana nya hua hai ya methods 
    email:this.email,
    username:this.username,
    fullname:this.fullname,
    // required:true
  },
  // here need aur two thing one is Accesss secret and a object where expiry is given 
  process.env.ACCESS_TOKEN_SECRET,
{
expiresIn:process.env.ACCESS_TOKEN_EXPIRY
})
}
// same process mai Refresh token kam karta hey 
userSchema.methods.generateRefreshToken = function(){
 return jwt.sign({
    _id:this._id,// already mongo mai bana nya hua hai ya methods 

  },
  // here need aur two thing one is Accesss secret and a object where expiry is given 
  process.env.AREFRESH_TOKEN_SECRET,
{
expiresIn:process.env.REFRESH_TOKEN_EXPIRY 
})
}
export const User = mongoose.model("User",userSchema)