import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const response = NextResponse.json({ message: 'Logout successful' });

        // Clear the token cookie
        response.cookies.set('token', '', {
            maxAge: -1,
            path: '/',
            httpOnly: true,
            secure: true
        });

        return response;
    } catch (error: any) {
        console.error('Error processing request:', error);
        return NextResponse.json({ message: 'Internal server error', status: 500 });
    }
}
