import { NextResponse } from 'next/server';
export async function GET() {
    const teams = [
        {
            _id: "team1",
            notes: "Leading the competition with the most live services.",
            hosts: ["host1", "host2"],
            liveServiceCount: 2,
            liveServicePercentage: 100,
            collectedPasswordsCount: 8,
            collectedPIICount: 11,
            score: 123 // Add score value here
        },
        {
            _id: "team2",
            notes: "Strong in defense but needs to improve on service uptime.",
            hosts: ["host3"],
            liveServiceCount: 0,
            liveServicePercentage: 0,
            collectedPasswordsCount: 2,
            collectedPIICount: 5,
            score: 324 // Add score value here
        },
        {
            _id: "team3",
            notes: "Newcomers with a lot to prove. Focused on rapid deployment.",
            hosts: ["host4", "host5"],
            liveServiceCount: 3,
            liveServicePercentage: 75,
            collectedPasswordsCount: 4,
            collectedPIICount: 6,
            score: 122 // Add score value here
        },
        {
            _id: "team4",
            notes: "Experienced in network security, lagging in service deployment.",
            hosts: ["host6"],
            liveServiceCount: 1,
            liveServicePercentage: 50,
            collectedPasswordsCount: 3,
            collectedPIICount: 7,
            score: 78 // Add score value here
        },
        {
            _id: "team5",
            notes: "Innovative strategies but facing stability issues.",
            hosts: ["host7", "host8"],
            liveServiceCount: 4,
            liveServicePercentage: 80,
            collectedPasswordsCount: 9,
            collectedPIICount: 10,
            score: 2 // Add score value here
        }
    ];

    return new NextResponse(JSON.stringify({ teams }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}