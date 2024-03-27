import React from 'react';
import { fetchDocuments } from '@/utils/mongo';
import HostTable from '@/components/HostTable';
import ServiceTable from '@/components/ServiceTable';

export default async function Page({ params }: { params: { id: string } }) {
    const teamArray = await fetchDocuments('teams', { _id: params.id });
    const team = teamArray[0];
    const hosts = await fetchDocuments('hosts', { team: params.id });
    const services = await fetchDocuments('services', { team: params.id });

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
