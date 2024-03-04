import { NextResponse } from 'next/server';
import { fetchReports } from '@/utils/mongo';

export async function GET() {
    const reports = await fetchReports();

    return new NextResponse(JSON.stringify({ reports }), {
        headers: {
            'Content-Type': 'application/json',
        }
    })
}