import express from "express"
import {registerUser}  from "../controllers/user.controller.js"
//step 1 usign multer directly for file handelling 
import {upload} from "../middleware/multer.middleware.js"

const router = express.Router();


// jate hua mujse milka jana to register k age middle ware   
//write routes here 
router.route("/register").post(upload.fields([
  {
    name:"avatar",
    maxCount:1
  },
  {
    name: "coverImage",
    maxCount: 1  // kitna image lena chahte  hoo 
  }
]),registerUser)




//*******practice ******** */
// // router.route("/login").post(login)
// router.post('/register', (req, res) => {
//   res.send('User registered');
// });


export default router