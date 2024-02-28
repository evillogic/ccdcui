import React from 'react';
import { fetchHosts } from '@/utils/mongo';
import HostTable from '../../components/HostTable';

export default async function HostsPage() {
  const hosts = await fetchHosts();

  return (
    <HostTable hosts={hosts} />
  );
}
