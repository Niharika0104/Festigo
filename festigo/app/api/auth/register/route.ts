import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication } from "@/Utils/Enums";

import { NextRequest,NextResponse } from 'next/server'


interface User {
    username: string;
    email: string;
    phonenumber: string;
    password: string;
    role: string;
}

    

export  async function POST(req:NextRequest,res:NextResponse){
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

        return NextResponse.json({

            message:"user is successfully created",
            data:user,
            errro:null,

        },{

            status:200
        })


      
    return NextResponse.json(user);

    } catch (error:any) {

        console.error("Error creating user:", error);
        
        // Send error response with appropriate status code

        return NextResponse.json({

            message:"some error occurred while creating user ",
            errro:error.message,
            data:null

        },{

            status:400
        })
    }
}

