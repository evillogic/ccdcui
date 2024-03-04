import React from 'react';
import IndicatorTable from './InidicatorTable';
import { Typography } from '@mui/material';
import { Template } from '@/utils/types';

interface TemplateTableProps {
    templates: Template[];
}

const newTemplateTable: React.FC<TemplateTableProps> = ({ templates }) => {
    const templateColumnMapping = {
        title: "Title",
        attackVector: "Attack Vector",
        accessLevel: "Access Level",
        persistence: "Persistence",
        dataAccessed: "Data Accessed",
        universallyAttempted: "Universally Attempted",
        compromisedIp: "Compromised IP",
    };
    return (
        <div>
            <Typography variant="h4" style={{ margin: '2rem' }}>Templates</Typography>
            <IndicatorTable dataObjects={templates} indicatorKey="title" linkKey="_id" linkPath="/templates" columnMapping={templateColumnMapping}/>
        </div>
    );
};

export default newTemplateTable;