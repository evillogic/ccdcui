import React from 'react';
import { fetchDocuments } from '@/utils/mongo';

export default async function Page({ params }: { params: { id: string } }) {
    const serviceArray = await fetchDocuments('services', { serviceIdentifier: decodeURIComponent(params.id) });
    const service = serviceArray[0];

  return (
    <div style={{ margin: '2rem' }}>
        {service ? (
            <>
                <h1>IP: {service.ip}</h1>
                <div>Hostname: {service.hostname}</div>
                <div>Service Identifier: {service.serviceIdentifier}</div>
                <div>Port: {service.port}</div>
                <div>Protocol: {service.protocol}</div>
                <div>Product: {service.product}</div>
                <div>Version: {service.version}</div>
                <div>Status: {service.status}</div>
                <div>Last Connection: {service.lastConnection}</div>
                <div>Host: {service.host}</div>
                <div>Team: {service.team}</div>
                <div>Notes: {service.notes}</div>
            </>
        ) : (
            <div>Service not found</div>
        )}
    </div>
);
}