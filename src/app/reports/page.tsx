import React from 'react';
import ReportTable from '../../components/ReportTable';
import { fetchReports } from '@/utils/mongo';

export default async function HostsPage() {
  const reports = await fetchReports();

  return (
    <ReportTable reports={reports} />
  );
}
