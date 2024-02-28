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

    const services = [
        {
            _id: "service1",
            hostname: "host1.example.com",
            port: 80,
            protocol: "HTTP",
            product: "nginx",
            version: "1.18.0",
            CVEList: ["CVE-2021-XXXX", "CVE-2022-XXXX"],
            status: "online",
            lastConnection: "2024-02-17T12:34:56Z",
            host: "host1",
            team: "team1",
            notes: "Nginx web server running the main website"
        },
        {
            _id: "service2",
            hostname: "host2.example.com",
            port: 5432,
            protocol: "TCP",
            product: "PostgreSQL",
            version: "13.1",
            CVEList: [],
            status: "online",
            lastConnection: "2024-02-18T13:45:00Z",
            host: "host2",
            team: "team1",
            notes: "PostgreSQL server containing user data"
        },
        {
            _id: "service3",
            hostname: "host3.example.com",
            port: 22,
            protocol: "TCP",
            product: "OpenSSH",
            version: "8.1",
            CVEList: ["CVE-2020-XXXX"],
            status: "offline",
            lastConnection: "2024-02-15T11:22:33Z",
            host: "host3",
            team: "team2",
            notes: "SSH server for remote administration"
        }
    ];

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

    for (const host of hosts) {
        await insertHost(host);
    }

    for (const service of services) {
        await insertService(service);
    }

    for (const team of teams) {
        await insertTeam(team);
    }
    
    const response = await fetchHosts();
    
return new NextResponse(JSON.stringify({ response }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}