// pages/api/setup-teams.ts
import { NextResponse, NextRequest } from 'next/server';
import { insertTeam, insertHost, insertService } from '@/utils/mongo';
import { Team } from '@/utils/types';

export async function POST(req: Request) {
    try {
        const { teamCount } = await req.json();
        const teamPromises = [];
        const hostPromises = [];
        const servicePromises = [];

        for (let i = 0; i < teamCount; i++) {
            const newTeam = {
                _id: `team${i + 1}`,
                notes: `Team ${i + 1} created automatically.`,
                score: 0, // Default score
                hosts: [], // No hosts initially
                liveServiceCount: 0,
                liveServicePercentage: 0,
                collectedPasswordsCount: 0,
                collectedPIICount: 0,
            };
            teamPromises.push(insertTeam(newTeam));

            // Create 2 hosts for each team
            for (let j = 0; j < 2; j++) {
                const newHost = {
                    _id: `host${i + 1}${j + 1}`,
                    ip: `10.0.${i + 1}.${j + 1}`,
                    team: `team${i + 1}`,
                    lastSeen: new Date().toISOString(),
                    notes: `Host ${i + 1}${j + 1} created automatically.`,
                    services: [],
                    collectedPasswordsCount: 0,
                    collectedPIICount: 0,
                };
                hostPromises.push(insertHost(newHost));

                // Create 3 services for each host
                for (let k = 0; k < 3; k++) {
                    const newService = {
                        _id: `service${i + 1}${j + 1}${k + 1}`,
                        hostname: `service${i + 1}${j + 1}${k + 1}.example.com`,
                        port: 80,
                        protocol: 'tcp',
                        product: 'Apache',
                        version: '2.4.41',
                        CVEList: ['CVE-2020-9490', 'CVE-2020-11984'],
                        status: 'open',
                        lastConnection: new Date().toISOString(),
                        host: `host${i + 1}${j + 1}`,
                        team: `team${i + 1}`,
                        notes: `Service ${i + 1}${j + 1}${k + 1} created automatically.`,
                    };
                    servicePromises.push(insertService(newService));
                }
            }
        }

        await Promise.all(teamPromises);
        await Promise.all(hostPromises);
        await Promise.all(servicePromises);
        return new NextResponse(JSON.stringify({ message: 'Teams created successfully' }), {
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: 'Failed to create teams' }), {
            status: 500,
        });
    }
};