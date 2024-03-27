import React from 'react';
import IndicatorTable from './InidicatorTable';
import { Typography } from '@mui/material';
import { Service } from '../utils/types';

interface ServiceTableProps {
    services: Service[];
}

// Example Service object
// {
//     _id: "service1",
//     hostname: "host1.example.com",
//     port: 80,
//     protocol: "HTTP",
//     product: "nginx",
//     version: "1.18.0",
//     CVEList: ["CVE-2021-XXXX", "CVE-2022-XXXX"],
//     status: "online",
//     lastConnection: "2024-02-17T12:34:56Z",
//     host: "host1",
//     team: "team1",
//     notes: "Nginx web server running the main website"
// },

const newServiceTable: React.FC<ServiceTableProps> = ({ services }) => {
    const serviceColumnMapping = {
        hostname: "Host",
        port: "Port",
        protocol: "Protocol",
        product: "Product",
        version: "Version",
        CVEList: "CVEs",
        status: "Status",
        lastConnection: "Last Connection",
        host: "Host",
        team: "Team",
        notes: "Notes"
    };
    return (
        <div>
            <Typography variant="h4" style={{ margin: '2rem' }}>Services</Typography>
            <IndicatorTable dataObjects={services} indicatorKey="status" linkKey="serviceIdentifier" linkPath="/services" columnMapping={serviceColumnMapping}/>
        </div>
    );
};

export default newServiceTable;