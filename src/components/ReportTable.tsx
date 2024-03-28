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
        reportData.author: "Author",
        compromisedTeams: "Compromised Teams",
        reportData.compromisedIp: "Compromised IP",
        reportData.persistenceEstablished: "Persistence",
        reportData.accessLevel: "Access Level",
    };
    return (
        <div>
            <Typography variant="h4" style={{ margin: '2rem' }}>Reports</Typography>
            <IndicatorTable dataObjects={reports} indicatorKey="compromisedTeams" linkKey="_id" linkPath="/reports" columnMapping={reportColumnMapping}/>
        </div>
    )
};

export default newReportTable;
