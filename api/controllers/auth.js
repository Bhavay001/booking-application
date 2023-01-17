import User from "../models/User.js";
import { createError } from "../utils/error.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
dotenv.config();

// route : api/auth/register
// method : post
// register User
export const register = async (req, res, next) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    await newUser.save();
    res.status(200).send("User has been Created");
  } catch (error) {
    next(error);
  }
};

// route : api/auth/login
// method : post
// login User
export const login = async (req, res, next) => {
  try {
    const { username } = req.body;
    const user = await User.findOne({ username });

    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong Password or Username"));

    // genereating token
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );
    // need to send the data by removing the password and admin field
    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ ...otherDetails });
  } catch (error) {
    next(error);
  }
};
