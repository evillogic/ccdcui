import React from 'react';
import { Typography } from '@mui/material';
import IndicatorTable from './InidicatorTable';

interface TeamTableProps {
    teams: string[];
}

// Example Team object
// {
//     _id: "team1",
//     notes: "Leading the competition with the most live services.",
//     hosts: ["host1", "host2"],
//     liveServiceCount: 2,
//     liveServicePercentage: 100,
//     collectedPasswordsCount: 8,
//     collectedPIICount: 11,
//     score: 123
// },

const newTeamTable: React.FC<TeamTableProps> = ({ teams }) => {
    const teamColumnMapping = {
        _id: "Team",
        score: "Score",
        liveServiceCount: "Live Services",
        liveServicePercentage: "Live Services Percentage",
        collectedPasswordsCount: "Collected Passwords",
        collectedPIICount: "Collected PII",
        notes: "Notes",
    };
    return (
        <div>
            <Typography variant="h4" style={{ margin: '2rem' }}>Teams</Typography>
            <IndicatorTable dataObjects={teams} indicatorKey="liveServicePercentage" linkKey="_id" linkPath="/teams" columnMapping={teamColumnMapping} />
        </div>
    );
};

export default newTeamTable;