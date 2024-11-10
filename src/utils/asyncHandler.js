//promise structure 
const asyncHandler = ()=>{
  (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next).catch((err)=>next(err)))
  }
}


export  {asyncHandler}
//*********Try Catch formate ******** */
//high order function  ek sur function mai forward 
//  const asyncHandler = ()=>{}
//   const asyncHandler = ()=>{()=>{}}
// const asyncHandler = (fn)=> async(req,res,next)=>{
//   try {
//     await fn(req,res,next)
//   } catch (err ) {
//     res.status(err.code || 500).json({
//       sucess: false,
//       message: err.message      
//     })
//   }
// }