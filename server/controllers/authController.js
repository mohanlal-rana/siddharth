const User = require("../models/userModel");

exports.signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "email already used" });
    }

    const userCreated = await User.create({
      email,
      password,
    });

    res.status(201).json({
      message: "Account Created",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const isMaatch = await userExist.comparePassword(password);

    if (isMaatch) {
      res.status(200).json({
        message: "login successfull",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "invalid email or password" });
    }
  } catch (error) {
    console.error("login error", error);
    res.status(500).json("internal server error");
  }
};

exports.user=async(req,res)=>{
  try {
    const user=req.user
    res.status(200).json({user})
  } catch (error) {
    console.log("error while getting user",error)
    next(error)
  }
}