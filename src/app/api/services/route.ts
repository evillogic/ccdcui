import { NextResponse } from 'next/server';
export async function GET() {

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
    

    return new NextResponse(JSON.stringify({ services }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}