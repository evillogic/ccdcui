'use client';

import React, { useEffect, useState } from 'react';
import { getTeams, getHosts, getServices } from '../../../utils/client';
import HostTable from '../../../components/HostTable';
import ServiceTable from '../../../components/ServiceTable';
import { Team, Host, Service } from '../../../utils/types';


export default function Page({ params }: { params: { id: string } }) {
    const [team, setTeam] = useState<Team | null>(null);
    const [hosts, setHosts] = useState<Host[]>([]);
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const teams = await getTeams();
                const teamId = params.id;
                const foundTeam = teams.find((team: Team) => team._id === teamId);
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
                const hosts = await getHosts();
                setHosts(hosts);
            } catch (error) {
                console.error('Error fetching hosts:', error);
            }
        };

        fetchData();
    }, [params.id]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const services = await getServices();
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
                    <h1>Team: {team._id}</h1>
                    <div>Live Services: {team.liveServiceCount}</div>
                    <div>Collected PII: {team.collectedPIICount}</div>
                    <div>Score: {team.score}</div>
                    <div>Live Services Percentage: {team.liveServicePercentage.toFixed(2)}%</div>
                    
                    <HostTable hosts={hosts} />
                    <ServiceTable services={services} />
                </>
            ) : (
                <div>Team not found</div>
            )}
        </div>
    );
}
