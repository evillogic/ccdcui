'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, ButtonBase } from '@mui/material';
import { useRouter } from 'next/navigation';
import { SxProps } from '@mui/material';
import { getTeams, getIndicatorColor } from './utils';


export default function TeamsPage() {
  const router = useRouter();
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

  const dataRowSX: SxProps = {
    display: "table-row",
    ":hover": {
      backgroundColor: "#f5f5f5",
      cursor: "pointer",
    },
  };

  return (
    <div style={{ margin: '2rem' }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Team</TableCell>
              <TableCell>Live Services</TableCell>
              <TableCell>Collected PII</TableCell>
              <TableCell>Score</TableCell>
              <TableCell>Live Services (%)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teams.map((team) => (
              <ButtonBase
                key={team.id}
                component={TableRow}
                sx={dataRowSX}
                onClick={() => {
                  router.push(`/teams/${team.id}`);
                }}
              >
                <TableCell>
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: getIndicatorColor(team.liveServicesPercentage),
                      display: 'inline-block',
                      marginRight: '0.5rem',
                      animation: 'blink 1.5s infinite',
                    }}
                  />
                  <Link href={`/teams/${team.id}`} passHref>
                    {team.id}
                  </Link>
                </TableCell>
                <TableCell>{team.liveServices}</TableCell>
                <TableCell>{team.collectedPii}</TableCell>
                <TableCell>{team.score}</TableCell>
                <TableCell>{team.liveServicesPercentage.toFixed(2)}%</TableCell>
              </ButtonBase>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
