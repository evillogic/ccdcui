import React from 'react';
import { fetchTeams } from '@/utils/mongo';
import TeamTable from '@/components/TeamTable';

export default async function HostsPage() {
  const teams = await fetchTeams();

  return (
    <TeamTable teams={teams} />
  );
}
