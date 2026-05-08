import CredentialsProvider from "next-auth/providers/credentials"

import bcrypt from 'bcryptjs';
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { connect } from "./dbConnect";
import { loginUser } from "@/actions/server/auth";




export const authOptions = {

  // Configure one or more authentication providers
  providers: [

     CredentialsProvider({

    //Sign in with (name) button
      name: 'Credentials',
    
    //form inputs
    credentials: {
      // email: { label: "Email", type: "email",placeholder: "enter email" },
      // password: { label: "Password", type: "password",placeholder: "enter password" },
    
    },

    async authorize(credentials, req) {
        //my own login logic
      console.log(credentials)

      //1- check user exist or not
      const user =await loginUser(credentials)
      if(!user) return null;

      // Return null if user data could not be retrieved
      return user;
    }
  }),

  //Google provider-------------------
   GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }),


  ],

}