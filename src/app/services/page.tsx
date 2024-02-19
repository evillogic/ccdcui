'use client';

import { useEffect, useState } from 'react';
import { getServices } from '../../utils/client';
import ServiceTable from '../../components/ServiceTable';

export default function ServicesPage() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const servicesData = await getServices();
      setServices(servicesData);
    };

    fetchServices();
  }, []);

  return (
    <div>
      <h1>Services Page</h1>
      <ServiceTable services={services} />
    </div>
  );
}
