import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication } from "@/Utils/Enums";

import { NextRequest,NextResponse } from 'next/server'
export async function GET(){
    return NextResponse.json({username:"Niharika"})
}

interface User {
    username: string;
    email: string;
    phonenumber: string;
    password: string;
    role: string;
}

    

export async function POST(req:NextRequest,res:NextResponse){
    try {
        // Parse request body
        const userdata: User = await req.json();

        // Generate salt for password hashing
        const salt = await bcrypt.genSalt(11);

        // Hash the password
        const hashedPassword: string = await bcrypt.hash(userdata.password, salt);

        // Create user in the database
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
   
        // Send success response with created user data
    //    res.st
    //     res.json({data:userdata},{status:200});
    } catch (error) {
        console.error("Error creating user:", error);
        // Send error response with appropriate status code
       // res.status(500).json({ error: "Error creating user" });
    }
}