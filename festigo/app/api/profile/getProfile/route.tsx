import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'
interface RequestData {
    username?: string;
  email?:string;
  }
  export  async function POST(req:NextRequest){
  try {
    const body: RequestData = await req.json();

   
    const updatedUser = await client.users.findFirst({
      where: {
        username: body.username,
      }
    });

    return NextResponse.json({data:updatedUser, status: 200 });
  }
catch(ex){
    console.log(ex)
    NextResponse.json({message:"Internal server error",status:500})
}
    

  }