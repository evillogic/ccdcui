import { NextResponse } from 'next/server';
import { fetchHosts } from '@/utils/mongo';

export async function GET() {

    const hosts = await fetchHosts();
    
return new NextResponse(JSON.stringify({ hosts }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}