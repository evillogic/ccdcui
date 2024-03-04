import { fetchTemplates } from '@/utils/mongo';
import { NextResponse } from 'next/server';

export async function GET() {
    const templates = await fetchTemplates();

    return new NextResponse(JSON.stringify({ templates }), {
        headers: {
            'Content-Type': 'application/json',
        }
    })
}