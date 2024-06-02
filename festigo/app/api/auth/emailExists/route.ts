import client from "../../../db";
import { NextRequest, NextResponse } from "next/server";

interface CheckUserRequest {
    email: string;
}

export async function POST(req: NextRequest) {
    try {
        // Parse request body
        const { email }: CheckUserRequest = await req.json();

        // Find user by email
        const user = await client.users.findFirst({
            where: {
                email: email,
            },
        });

        // Return true if user exists, otherwise false
        if (user) {
            return NextResponse.json({ exists: true,  status: 200 });
        } else {
            return NextResponse.json({ exists: false,  status: 200 });
        }

    } catch (error: any) {
        console.error("Error processing request:", error);
        return NextResponse.json({ message: "Internal server error",  status: 500 });
    }
}
