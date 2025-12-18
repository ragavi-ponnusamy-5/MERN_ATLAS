const express = require("express")
const router = express.Router();
const {registerUser,loginUser}=require("../controller/userController");
const authMiddleware = require("../middleware/authmiddleware");
router.post("/register",registerUser)
router.post("/login",loginUser) 
router.get("/profile",authMiddleware,(req,res)=>{
    res.json({message:"Profile accessed successfully",user:req.user})
});

module.exports = router;