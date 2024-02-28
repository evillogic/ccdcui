import { NextResponse } from 'next/server';
import { fetchServices } from '@/utils/mongo';
export async function GET() {

    const services = await fetchServices();
    

    return new NextResponse(JSON.stringify({ services }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}