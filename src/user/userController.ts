import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bycrypt from "bcrypt"

const createUser = async (req: Request, res: Response, next: NextFunction) => {

  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    const error = createHttpError(400, "All field are required");
    return next(error);
  }

  //Database call
  const user = await userModel.findOne({ email });

  if(user){
    const error = createHttpError(400,"User already exist with this email.");
    return next(error)
  }

  // password hash
  const hashedPassword =await bycrypt.hash(password,10)
};
export { createUser };
