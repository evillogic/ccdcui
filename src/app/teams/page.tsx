'use client';

import React, { useEffect, useState } from 'react';
import { getTeams } from '../../utils/client';
import TeamTable from '../../components/TeamTable';


export default function TeamsPage() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teams = await getTeams();
        setTeams(teams);
      } catch (error) {
        // Handle the error here (e.g., show an error message to the user)
        console.error("Error fetching teams:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <TeamTable teams={teams} />
  );
}
