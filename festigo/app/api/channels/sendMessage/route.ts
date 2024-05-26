import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication,ChannelType } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'

interface MessageData {
  eventid:string;
  
  
  }
export  async function POST(req:NextRequest, res:NextResponse){
 
    try{
    const body:MessageData=await req.json();

    const joinedData = await client.channel.findMany(
        {
            include:{
                messages:true
            }
        }
    );
      
    
        
   return NextResponse.json({data:joinedData,status:200})
}
catch(ex){
    console.log(ex)
    NextResponse.json({message:"Internal server error",status:500})
}
    

} 