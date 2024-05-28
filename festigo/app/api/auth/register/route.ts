import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'
import { cookies } from 'next/headers';

interface User {
    username: string;
    email: string;
    phonenumber: string;
    password: string;
    role: string;
}

    

export  async function POST(req:NextRequest,res:NextResponse){
    try {
        
        const userdata: User = await req.json();

     
        const salt = await bcrypt.genSalt(11);

    
        const hashedPassword: string = await bcrypt.hash(userdata.password, salt);

        const exists = await client.users.findMany({
            where: { 
                OR:[
                    { username: userdata.username }, 
                    { email: userdata.email } 
                ]
             }, 
          });
          if(exists.length>0)return NextResponse.json({message:"Username is already taken",status:400})
        const user = await client.users.create({
            data: {
                username: userdata.username,
                email: userdata.email,
                phoneNumber: userdata.phonenumber,
                password: hashedPassword,
                authenticationType: Authentication.EMAIL,
                role: Role.EVENT_ORGANIZER
            }
        });
        const result={
            email:user.email,
            username:user.username,
            phonenumber:user.phoneNumber,
            role:user.role,
            authentication:user.authenticationType
        }
        const val:any=process.env.SECRET_KEY||undefined;
    
        const token:string=jwt.sign(result,val);
        cookies().set(
           "token",token,{
            maxAge: 15*24 * 60 * 60 * 1000, 
            httpOnly: true, 
            secure: true 
    }
   
  );
      
        return  NextResponse.json({data:result,status:200} );
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({message:"Internal server error",status:500})
    }
}