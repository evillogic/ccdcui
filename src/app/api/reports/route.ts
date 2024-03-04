import { NextResponse } from 'next/server';
import { fetchReports, insertReport } from '@/utils/mongo';

export async function GET() {
    const reports = await fetchReports();

    return new NextResponse(JSON.stringify({ reports }), {
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

export async function POST(req: Request) {
    try {
        const report = await req.json();
        await insertReport(report);
        return new NextResponse(JSON.stringify({ message: 'Successfully created report' }), {
            status: 200,
        })
    } catch (error) {
        console.error('Report API creation failed:', error);
        return new NextResponse(JSON.stringify({ message: 'Failed to create report' }), {
            status: 500,
        })
    }
}