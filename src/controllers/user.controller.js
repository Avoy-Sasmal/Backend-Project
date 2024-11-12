//already hum ne utils mai async function bana ke rakha hai ta ki har file kot promises mai na rakh na padhe 

import {asyncHandler} from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req,res)=>{

 return res.status(200).json({
  message:"ok"
})
})

export {
  registerUser,

};//object wise export hai yaa 