"use server"

import { dbConnect } from "@/provider/dbConnect"
import bcrypt from "bcryptjs";

export const postUser = async (payload)=>{
    console.log(payload)

const isExist  =await (await dbConnect("users")).findOne({email:payload.email})
if(isExist){
    return{
        success:false,message:"user already existed"
    } 
}
const hashPassWord = await bcrypt.hash(payload.password,10)
// console.log(hashPassWord)
const newUser = {
    ...payload,
    createdAt:new Date().toISOString(),
    role:"user",
    password:hashPassWord

}
const result = await (await dbConnect("users")).insertOne(newUser);
console.log(newUser)
if (result.acknowledged){


return {
    success: true,
    message: "User created successfully",
  }}
}