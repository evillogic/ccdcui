import { NextResponse } from 'next/server';
import { insertTeam, insertHost, insertService, fetchHosts } from '@/utils/mongo';

export async function GET() {

    const hosts = [
        {
            _id: "host1",
            team: "team1",
            ip: "192.168.1.1",
            lastSeen: "2024-02-17T12:34:56Z",
            notes: "Primary web server host.",
            services: ["service1"], // Assuming service IDs are referenced
            liveServiceCount: 1,
            collectedPasswordsCount: 5,
            collectedPIICount: 7
        },
        {
            _id: "host2",
            team: "team1",
            ip: "192.168.1.2",
            lastSeen: "2024-02-18T13:45:00Z",
            notes: "Database server host.",
            services: ["service2"], // Referencing services by their IDs
            liveServiceCount: 1,
            collectedPasswordsCount: 3,
            collectedPIICount: 4
        },
        {
            _id: "host3",
            team: "team2",
            ip: "192.168.1.3",
            lastSeen: "2024-02-15T11:22:33Z",
            notes: "SSH server for remote administration.",
            services: ["service3"], // List of service IDs hosted on this host
            liveServiceCount: 0, // This could be dynamically calculated based on service statuses
            collectedPasswordsCount: 2,
            collectedPIICount: 5
        }
    ];

    for (const host of hosts) {
        await insertHost(host);
    }
    
    const response = await fetchHosts();
    
return new NextResponse(JSON.stringify({ response }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}