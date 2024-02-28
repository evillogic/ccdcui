// pages/api/setup-teams.ts
import { NextResponse, NextRequest } from 'next/server';
import { insertTeam } from '@/utils/mongo';
import { Team } from '@/utils/types';

export async function POST(req: Request) {
    try {
        const { teamCount } = req.body;
        const teamPromises = [];

        for (let i = 0; i < teamCount; i++) {
            const newTeam: Omit<Team, '_id'> = {
                notes: `Team ${i + 1} created automatically.`,
                score: 0, // Default score
                hosts: [], // No hosts initially
                liveServiceCount: 0,
                liveServicePercentage: 0,
                collectedPasswordsCount: 0,
                collectedPIICount: 0,
            };
            teamPromises.push(insertTeam(newTeam));
        }

        await Promise.all(teamPromises);
        return new NextResponse(JSON.stringify({ message: 'Teams created successfully', promises: teamPromises }), {
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: 'Failed to create teams' }), {
            status: 500,
        });
    }
};