import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useRouter } from 'next/navigation';
import IndicatorTable from './InidicatorTable';

interface ServiceTableProps {
    services: string[];
}

export const getIndicatorColor = (percentage: number) => {
    if (percentage >= 50) {
        return 'green';
    } else if (percentage >= 30) {
        return 'orange';
    } else {
        return 'red';
    }
};

const ServiceTable: React.FC<ServiceTableProps> = ({ services }) => {
    const router = useRouter();
    return (
        <TableContainer component={Paper} style={{ marginTop: '2rem' }}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Service Name</TableCell>
                    <TableCell>Status</TableCell>
                    {/* Add more columns as needed */}
                </TableRow>
            </TableHead>
            <TableBody>
                {services && services.map((service, index) => (
                    <TableRow key={index}>
                        <TableCell>{service.name}</TableCell>
                        <TableCell>{service.status}</TableCell>
                        {/* Add more cells as needed */}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    );
};

const newServiceTable: React.FC<ServiceTableProps> = ({ services }) => {
    const serviceColumnMapping = {
        name: 'Service Name',
        status: 'Status',
    };
    return (
        <IndicatorTable dataObjects={services} indicatorKey="status" linkKey="name" linkPath="/services" columnMapping={serviceColumnMapping}/>
    );
};

export default newServiceTable;