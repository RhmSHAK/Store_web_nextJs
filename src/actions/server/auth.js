"use server";


import { connect } from '@/app/lib/dbConnect';
import bcrypt from 'bcryptjs';

export const postUser = async (userData) => {
   //console.log(userData)
    
    //0- validate user data
    if( !userData.email || !userData.password){
        return {message:"All fields are required"}
    }

    //1- check user exist or not
    const  isExist = await connect("users").findOne({email:userData.email});
    if(isExist){
        return {message:"User already exist"}
    }

   //hash password
    const hashPassword = await bcrypt.hash(userData.password, 10);
   


    //2- if not exist create new user
    const newUser={
        provider:"credentials",
        ...userData,
        createdAt: new Date().toISOString(),
        role:"user",
        password: hashPassword,
    };

    console.log(newUser)

    //3- send user to database
    const result = await connect("users").insertOne(newUser);
    if(result.acknowledged){
        return {
            ...result, insertedId: result.insertedId.toString(),
        }
    }


}



export const loginUser = async (userData) => {
    //console.log("userData:", userData.email);
    const { email, password } = userData;

    //0- validate user data
    if( !email || !password){
        return null
    }

    //1- check user exist or not
    const  isExist = await connect("users").findOne({email});
    console.log(isExist)
    if(!isExist){
        return null;
    }

    //2- compare password
    const isMatch = await bcrypt.compare(password, isExist.password);
    if(isMatch){
        return isExist;
    }else{
        return null;
    }

    
};




