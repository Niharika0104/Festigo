import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role, Authentication } from "@/Utils/Enums";


import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken'

import dotenv from 'dotenv'
import { NextRequest, NextResponse } from "next/server";
dotenv.config();
interface User {
    username: string;
    password: string;
    email: string;
}



export async function POST(req: NextRequest, res: NextResponse) {
    try {
        // Parse request body
        const userdata: User = await req.json();

        const user = await client.users.findFirst({
            where: {
                OR: [
                    { username: userdata.username },
                    { email: userdata.email }
                ]
            },
        });
        if (user != null) {


            const hashedPassword: boolean = await bcrypt.compare(userdata.password, user.password);
            if (hashedPassword) {
                const result = {
                    email: user.email,
                    username: user.username,
                    phonenumber: user.phoneNumber,
                    role: user.role,
                    authentication: user.authenticationType
                }
                // server.js

                const val: any = process.env.SECRET_KEY || undefined;

                const token: string = jwt.sign(result, val);
                cookies().set(
                    "token", token, {
                    maxAge: 15 * 24 * 60 * 60 * 1000,
                    httpOnly: true,
                    secure: true
                }

                );
                //res.send={message:result,status:200}

                return NextResponse.json({ data: result, status: 200 });
            } else {
                return NextResponse.json({ message: "incorrect password", status: 401 })
            }
        }

        return NextResponse.json({ message: "user doesnot exists", status: 400 })




    } catch (error) {
        console.error("Error creating user:", error);

        // Send error response with appropriate status code
        return NextResponse.json({ message: "Internal server error", status: 500 })

    }
}


