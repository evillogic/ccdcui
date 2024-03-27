import React from 'react';
import { fetchDocuments } from '@/utils/mongo';
import ServiceTable from '@/components/ServiceTable';

export default async function Page({ params }: { params: { id: string } }) {
    const hostArray = await fetchDocuments('hosts', { ip: params.id });
    const host = hostArray[0];
    const services = await fetchDocuments('services', { ip: params.id });

  return (
    <div style={{ margin: '2rem' }}>
        {host ? (
            <>
                <h1>IP: {host.ip}</h1>
                <div>Team: {host.team}</div>
                <div>Last Seen: {host.lastSeen}</div>
                <div>Notes: {host.notes}</div>
                <div>Collected Passwords: {host.collectedPasswordsCount}</div>
                <div>Collected PII: {host.collectedPIICount}</div>
                
                <ServiceTable services={services} />
            </>
        ) : (
            <div>Host not found</div>
        )}
    </div>
);
}
