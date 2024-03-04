import React from 'react';
import IndicatorTable from './InidicatorTable';
import { Typography } from '@mui/material';
import { Report } from '../utils/types';

interface ReportTableProps {
    reports: Report[];
}

const newReportTable: React.FC<ReportTableProps> = ({ reports }) => {
    const reportColumnMapping = {
        title: "Title",
        user: "User",
        compromisedTeams: "Compromised Teams",
        compromisedIp: "Compromised IP",
        persistence: "Persistence",
        accessLevel: "Access Level",
        dataAccessed: "Data Accessed",
    };
    return (
        <div>
            <Typography variant="h4" style={{ margin: '2rem' }}>Reports</Typography>
            <IndicatorTable dataObjects={reports} indicatorKey="compromisedTeams" linkKey="_id" linkPath="/reports" columnMapping={reportColumnMapping}/>
        </div>
    )
};