

import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication,ChannelType } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'

interface EventData {
 vendorId:string;
 serviceType?:string;
 vendorName?:string;
 Location?:string;
 email?:string;
 budget?:string;
  }
export  async function POST(req:NextRequest, res:NextResponse){
 
    try{
    const body:EventData=await req.json();

   const updatedVendor = await client.vendor.update({
    where: { id:body.vendorId },
    data: {
      vendorName:body.vendorName,
      OrderType:body.serviceType,
      Location:body.Location,
      email:body.email,
      budget:body.budget
    },
  });
   return NextResponse.json({data:updatedVendor,status:200})
}
catch(ex){
    console.log(ex)
    NextResponse.json({message:"Internal server error",status:500})
}
    

} 