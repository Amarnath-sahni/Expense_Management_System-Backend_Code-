import { userModels } from '../models/user.model.js';
import {generateToken} from '../util/auth.util.js';
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { name, email, phone, password, isVerified } = req.body;

    // Check for existing user
    const existingUser = await userModels.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User email already exists" });
    }

    // Create new user
    const newUser = await userModels.create({
      name,
      email,
      phone,
      password ,
      isVerified,
    });

    res
      .status(201)
      .json({ success: true, message: "User created successfully", user: newUser });
  } catch (err) {
    console.error("Error in signup:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


export const login = async(req, res)=>{
let {email, password, isVerified} = req.body;
  let existingUser = await userModels.findOne({email});
 if (!existingUser) return res.status(400).json({success: false, message: "User does not exist"});

  const isMatch = await bcryptjs.compare(password, existingUser.password);
  if(!isMatch) return res.status(401).json({ success: false, message: "Invalid credentials" });

  if (!existingUser.isVerified) { //login successfully but isVarified is not true then
      existingUser.isVerified = true;
      await existingUser.save();
    }

  const token = generateToken(existingUser._id);
  
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 24* 60* 60* 1000, //1 day
  })

  res.status(200).json({
  success: true,
  message: "Login successful",
  token,
  existingUser
});

}

// LOGOUT
export const logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ success: true, message: "Logged out successfully" });
};

export const updatePassword = async (req, res) => {
  try {
    const userId = req.params.id;
    const { oldPassword, newPassword } = req.body;

    // 1. Find user
    const existingUser = await userModels.findById(userId);
    if (!existingUser)
      return res.status(404).json({ success: false, message: "User not found" });

    // 2. Check old password
    const isMatch = await bcryptjs.compare(oldPassword, existingUser.password);
    if (!isMatch)
      return res.status(401).json({ success: false, message: "Old password is incorrect" });

    // 3. Hash new password
    const hashedPassword = await bcryptjs.hash(newPassword, 10);

    // 4. Update and save
    existingUser.password = hashedPassword;
    await existingUser.save();

    res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (err) {
    console.error("Error updating password:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const userId = req.params.id; // get user id from params
    const { name, email, phone, password } = req.body;

    // Find user by ID
    const user = await userModels.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Update fields if provided
    if (name) user.name = name;
    if (email) user.email = email;
    if (phone) user.phone = phone;

    // Update password if provided (hash it)
    if (password) {
      const salt = await bcryptjs.genSalt(10);
      user.password = await bcryptjs.hash(password, salt);
    }

    // Save updated user
    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user,
    });
  } catch (err) {
    console.error("Error in updateProfile:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
