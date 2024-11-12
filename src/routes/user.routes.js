import express from "express"
import {registerUser}  from "../controllers/user.controller.js"

const router = express.Router();

//write routes here 
router.route("/register").post(registerUser)




//*******practice ******** */
// // router.route("/login").post(login)
// router.post('/register', (req, res) => {
//   res.send('User registered');
// });


export default router