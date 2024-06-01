import client from "../../db";
import { Role, Authentication } from "@/Utils/Enums";
import { NextRequest, NextResponse } from 'next/server';

interface User {
    username: string;
    email?: string;
    phonenumber?: string;
    role?: string;
}

export async function PATCH(req: NextRequest) {
    try {
        const userdata: User = await req.json();

        // Check if the user exists
        const existingUser = await client.users.findUnique({
            where: { username: userdata.username },
        });

        if (!existingUser) {
            return NextResponse.json({ message: "User not found", status: 404 });
        }

        // Update user details
        const updatedUser = await client.users.update({
            where: { username: userdata.username },
            data: {
                email: userdata.email !== undefined ? userdata.email : existingUser.email,
                phoneNumber: userdata.phonenumber !== undefined ? userdata.phonenumber : existingUser.phoneNumber,
                role: userdata.role !== undefined ? userdata.role : existingUser.role,
            },
        });

        const result = {
            email: updatedUser.email,
            username: updatedUser.username,
            phonenumber: updatedUser.phoneNumber,
            role: updatedUser.role,
            authentication: updatedUser.authenticationType
        };

        // Send success response with updated user data
        return NextResponse.json({
            message: "User details updated successfully",
            data: result,
            error: null,
        }, {
            status: 200
        });

    } catch (error: any) {
        console.error("Error updating user:", error);
        // Send error response with appropriate status code
        return NextResponse.json({
            message: "Some error occurred while updating user",
            error: error.message,
            data: null
        }, {
            status: 500
        });
    }
}
