const User = require("../model/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
exports.registerUser=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }
        const hashed = await bcrypt.hash(password,10)
        const user = await User.create({email,password:hashed})
        res.json({message:"User registered successfully",user})
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
}

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // ✅ SEND ONLY ONE RESPONSE
    return res.status(200).json({
      message: "User logged in successfully",
      token,
      user
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
