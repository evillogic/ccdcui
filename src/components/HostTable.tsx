import React from 'react';
import IndicatorTable from './InidicatorTable';
import { Typography } from '@mui/material';
import { Host } from '../utils/types';

interface HostTableProps {
    hosts: Host[];
}

// Example Host object
// {
//     _id: "host1",
//     team: "team1",
//     ip: "192.168.1.1",
//     lastSeen: "2024-02-17T12:34:56Z",
//     notes: "Primary web server host.",
//     hosts: ["host1"], // Assuming host IDs are referenced
//     liveServiceCount: 1,
//     collectedPasswordsCount: 5,
//     collectedPIICount: 7
// },

const newHostTable: React.FC<HostTableProps> = ({ hosts }) => {
    const hostColumnMapping = {
        team: "Team",
        ip: "IP Address",
        lastSeen: "Last Seen",
        liveServiceCount: "Live Services",
        collectedPasswordsCount: "Collected Passwords",
        collectedPIICount: "Collected PII",
        notes: "Notes",
    };
    return (
        <div>
            <Typography variant="h4" style={{ margin: '2rem' }}>Hosts</Typography>
            <IndicatorTable dataObjects={hosts} indicatorKey="liveServiceCount" linkKey="ip" linkPath="/hosts" columnMapping={hostColumnMapping}/>
        </div>
    );
};

export default newHostTable;