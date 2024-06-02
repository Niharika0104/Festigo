import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'
interface RequestData {
    username: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    location?: string;
    gender?: string;
    birthday?: Date;
  }
  export  async function POST(req:NextRequest){
  try {
    const body: RequestData = await req.json();

    // Construct the data object dynamically
    const data: { [key: string]: any } = {};
    if (body.firstname !== undefined) data.firstname = body.firstname;
    if (body.lastname !== undefined) data.lastname = body.lastname;
    if (body.email !== undefined) data.email = body.email;
    if (body.location !== undefined) data.location = body.location;
    if (body.gender !== undefined) data.gender = body.gender;
    if (body.birthday !== undefined) data.birthday = body.birthday;

    const updatedUser = await client.users.update({
      where: {
        username: body.username,
      },
      data: data,
    });

    return NextResponse.json({ message: "User updated successfully", status: 200, user: updatedUser });
  }
catch(ex){
    console.log(ex)
    NextResponse.json({message:"Internal server error",status:500})
}
    

  }