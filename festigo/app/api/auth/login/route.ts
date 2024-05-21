import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication } from "@/Utils/Enums";

import { NextRequest,NextResponse } from 'next/server'



interface User {
    username: string;
    password: string;
   email:string;
}

    

export  async function POST(req:NextRequest,res:NextResponse){
    try {
        // Parse request body
        const userdata: User = await req.json();
        const user = await client.users.findFirst({
            where: { 
                OR:[
                    { username: userdata.username }, 
                    { email: userdata.email } 
                ]
             }, 
          });
       if(user!=null){

      
        const hashedPassword: boolean = await bcrypt.compare(userdata.password, user.password);
           if(hashedPassword){
          return      NextResponse.json(user);
           }else{
            return    NextResponse.json({message:"incorrect password",statusbar:401})
           }
       }
      
        return NextResponse.json({"message":"user doesnot exists"})
       
 
      
  
    } catch (error) {
        console.error("Error creating user:", error);
        // Send error response with appropriate status code
       // res.status(500).json({ error: "Error creating user" });
    }
}