import React from 'react';
import { fetchServices } from '@/utils/mongo';
import ServiceTable from '../../components/ServiceTable';

export default async function HostsPage() {
  const services = await fetchServices();

  return (
    <ServiceTable services={services} />
  );
}
