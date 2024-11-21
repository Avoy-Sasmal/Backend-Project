//already hum ne utils mai async function bana ke rakha hai ta ki har file kot promises mai na rakh na padhe 

import { ApiError } from "../utils/ApiError.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import {uploadCloudnary} from "../utils/cloudinary.js";
// import "ApiResponse" from "../utils/ApiResponse.js";
import { ApiResponse } from "../utils/ApiResponse.js";



const registerUser = asyncHandler(async (req,res)=>{
//get user details from frontend 
// validation - not empty 
// check if user is already exists: uername,email
// check for images,sheck for avatar 
// upload them cloudnary ,avatar 
// create user object  - create entry in db 
// although humarah joo password hai woo encrypted hai firvbhi isko hum frontend ko nahi dena chahte ******* so remove password and refresh token field from response 
// check for user creation 
// return res 


// get user details  from or url se bbhi aa sakta hai 
// destructuring 
const {fullname,email, username,password} = req.body
console.log("email",email);


// step2 se pehla if you want to direct file handeling you cant sirf directly sirf data handel kar sakte hay too hum jayenga route ka pass or  multer ka function direct use karenga 

// validation 
if (fullname === ""){
  throw new ApiError(400,"fullname is required ");
  // agar har ek method if laga kar check kar rahe hoo to ya bhi theek hai basic  approaches 
  // but here also a professional approach 
  if(
    [fullname,email,username,password].some((field)=>{
field?.trim() === "" // agar empty hai to trim kar dijiya yani blank space remove if after trim it has empty then return empty 
    })
  ){
throw new ApiError(400,"All fields are required ")
  }
    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })  
}
if(existedUser){
  throw new ApiError(409,"User With Email or User name already exist  ")


  // images or avtar handel  jaise req.body ka ccess hai multer bhi hume req.file ka accesss deta hai 
  const avatarLocalPath = req.files?.avatar[0]?.path; // multer ne jo file liya hai usko lena ka tarika ya hai 
  // cover image ka bhi local path le leo 
  const coverImageLoaclPath = req.files?.coverImage[0]?.path;

  if(!avatarLocalPath){
    throw new ApiError(400,"Avatar file is required ")
  }
  if (!coverImageLocalPath) {
  throw new ApiError(400, "Cover image file is required.");
}

}

// upload image on cloudnary 
  const avatar = await  uploadCloudnary(avatarLocalPath)
 const coverImage = await uploadCloudnary(coverImageLoaclPath)

    throw new ApiError(400, "Cover image file is required.");


    // user hai aur kya kya leta hai dekh lo 
    const user = await User.create({
      fullname,
      avatar: avatar.url,
      coverImage:coverImage?.url || "",// checlk here cover image hai ki nahi hey
      emial,
      password,
      username 
    })

const createduser = await  User.findById(user._id).select('-password -refreshToken') // wired syntax of find byId 


// give the error 
if(!createduser){
  throw new ApiError(500,"Something went wrong while registering the User ");
  
}


// last and final step send a respond 
return res.status(201).json(
  new ApiResponse(200,createdUser,"User Registered Successfully")
)

})



export {
  registerUser,

};//object wise export hai yaa 