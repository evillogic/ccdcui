import { NextResponse } from 'next/server';
export async function GET() {
    const services = [
        {
            name: 'Service 1',
            status: 'Active',
        },
        {
            name: 'Service 2',
            status: 'Inactive',
        },
        {
            name: 'Service 3',
            status: 'Active',
        },
        {
            name: 'Service 4',
            status: 'Inactive',
        },
        {
            name: 'Service 5',
            status: 'Active',
        },
        {
            name: 'Service 6',
            status: 'Inactive',
        },
        {
            name: 'Service 7',
            status: 'Active',
        },
        {
            name: 'Service 8',
            status: 'Inactive',
        },
        {
            name: 'Service 9',
            status: 'Active',
        },
    ];

    return new NextResponse(JSON.stringify({ services }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}