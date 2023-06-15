import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export async function register(req, res) {
  const { username, email, password } = req.body;

  try {

    const passwordHashed = await bcrypt.hash(password, 10);
    console.log(passwordHashed)

    const newUser = new User({
      username,
      email,
      password: passwordHashed,
    });
    const userSaved = await newUser.save();

    jwt.sign()

    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });


  } catch (err) {
    console.log(err);
  }
}


export function login(req, res) {
  res.send("login");
}
