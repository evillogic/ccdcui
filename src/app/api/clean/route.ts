// pages/api/setup-teams.ts
import { NextResponse, NextRequest } from 'next/server';
import { deleteAll } from '@/utils/mongo';

export async function POST(req: Request) {
    try {
        await deleteAll();

        return new NextResponse(JSON.stringify({ message: 'Cleaned up successfully' }), {
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: 'Failed to clean up' }), {
            status: 500,
        });
    }
};