'use client';

import React, { useEffect, useState } from 'react';
import { getTeams, getServices } from '../../../utils/client';
import ServiceTable from '../../../components/ServiceTable';

// Assuming the team's services are structured like this:
// services: [{ name: 'Service 1', status: 'Active', ... }, ...]

export default function Page({ params }: { params: { id: string } }) {
    const [team, setTeam] = useState(null);
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const teams = await getTeams();
                const teamId = Number(params.id);
                const foundTeam = teams.find((team) => team.id === teamId);
                setTeam(foundTeam);
            } catch (error) {
                console.error('Error fetching teams:', error);
            }
        };

        fetchData();
    }, [params.id]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const services = await getServices();
                console.log(services);
                setServices(services);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchData();
    }, [params.id]);

    return (
        <div style={{ margin: '2rem' }}>
            {team ? (
                <>
                    <h1>Team: {team.id}</h1>
                    <div>Live Services: {team.liveServices}</div>
                    <div>Collected PII: {team.collectedPii}</div>
                    <div>Score: {team.score}</div>
                    <div>Live Services Percentage: {team.liveServicesPercentage.toFixed(2)}%</div>
                    
                    {/* Assuming 'services' is part of your team data structure */}
                    <ServiceTable services={services} />
                </>
            ) : (
                <div>Team not found</div>
            )}
        </div>
    );
}
