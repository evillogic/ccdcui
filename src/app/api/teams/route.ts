import { NextResponse } from 'next/server';
export async function GET() {
    const teams = [
        { id: 1, liveServices: 5, collectedPii: 10, score: 80, liveServicesPercentage: 50 },
        { id: 2, liveServices: 3, collectedPii: 8, score: 75, liveServicesPercentage: 37.5 },
        { id: 3, liveServices: 4, collectedPii: 12, score: 85, liveServicesPercentage: 33.33 },
        { id: 4, liveServices: 6, collectedPii: 15, score: 90, liveServicesPercentage: 60 },
        { id: 5, liveServices: 2, collectedPii: 5, score: 70, liveServicesPercentage: 20 },
        { id: 6, liveServices: 7, collectedPii: 18, score: 95, liveServicesPercentage: 70 },
        { id: 7, liveServices: 4, collectedPii: 11, score: 82, liveServicesPercentage: 40 },
        { id: 8, liveServices: 3, collectedPii: 9, score: 78, liveServicesPercentage: 30 },
        { id: 9, liveServices: 5, collectedPii: 13, score: 88, liveServicesPercentage: 50 },
        { id: 10, liveServices: 2, collectedPii: 6, score: 72, liveServicesPercentage: 20 },
        // ... rest of the teams
    ];

    return new NextResponse(JSON.stringify({ teams }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}