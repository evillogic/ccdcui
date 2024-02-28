import { NextResponse } from 'next/server';
import { fetchTeams } from '@/utils/mongo';
export async function GET() {

    const teams = await fetchTeams();

    return new NextResponse(JSON.stringify({ teams }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}