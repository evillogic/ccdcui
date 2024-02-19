'use client';

import React, { useEffect, useState } from 'react';
import { getHosts } from '../../utils/client';
import HostTable from '../../components/HostTable';


export default function HostsPage() {
  const [hosts, setHosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hosts = await getHosts();
        setHosts(hosts);
      } catch (error) {
        // Handle the error here (e.g., show an error message to the user)
        console.error("Error fetching hosts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <HostTable hosts={hosts} />
  );
}
