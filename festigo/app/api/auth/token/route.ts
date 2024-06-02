import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(req: NextRequest) {
    const token = req.cookies.get("token")?.value || "";

    if (!token) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 402 });
    }

    try {
        const secretKey = process.env.SECRET_KEY || '';
        const decoded = await jwt.verify(token, secretKey);
        return NextResponse.json({ user: decoded });
    } catch (error) {
        return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }
}
