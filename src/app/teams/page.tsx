import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function TeamsPage() {
  const teams = [
    { name: 'Team 1', liveServices: 5, collectedPii: 10, score: 80 },
    { name: 'Team 2', liveServices: 3, collectedPii: 8, score: 75 },
    { name: 'Team 3', liveServices: 4, collectedPii: 12, score: 85 },
    { name: 'Team 4', liveServices: 6, collectedPii: 15, score: 90 },
    { name: 'Team 5', liveServices: 2, collectedPii: 6, score: 70 },
    { name: 'Team 6', liveServices: 7, collectedPii: 18, score: 95 },
    { name: 'Team 7', liveServices: 3, collectedPii: 9, score: 80 },
    { name: 'Team 8', liveServices: 4, collectedPii: 11, score: 85 },
    { name: 'Team 9', liveServices: 5, collectedPii: 13, score: 90 },
    { name: 'Team 10', liveServices: 6, collectedPii: 16, score: 95 },
    { name: 'Team 11', liveServices: 2, collectedPii: 7, score: 75 },
    { name: 'Team 12', liveServices: 3, collectedPii: 10, score: 80 },
    { name: 'Team 13', liveServices: 4, collectedPii: 12, score: 85 },
    { name: 'Team 14', liveServices: 5, collectedPii: 15, score: 90 },
    { name: 'Team 15', liveServices: 6, collectedPii: 18, score: 95 },
    { name: 'Team 16', liveServices: 2, collectedPii: 8, score: 75 },
    { name: 'Team 17', liveServices: 3, collectedPii: 11, score: 80 },
    { name: 'Team 18', liveServices: 4, collectedPii: 13, score: 85 },
    { name: 'Team 19', liveServices: 5, collectedPii: 16, score: 90 },
    { name: 'Team 20', liveServices: 6, collectedPii: 19, score: 95 },
    { name: 'Team 21', liveServices: 2, collectedPii: 9, score: 80 },
    { name: 'Team 22', liveServices: 3, collectedPii: 12, score: 85 },
  ];

  return (
    <div style={{ margin: '2rem' }}>
      <h1>Teams Page</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Team</TableCell>
              <TableCell>Live Services</TableCell>
              <TableCell>Collected PII</TableCell>
              <TableCell>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teams.map((team) => (
              <TableRow key={team.name}>
                <TableCell>{team.name}</TableCell>
                <TableCell>{team.liveServices}</TableCell>
                <TableCell>{team.collectedPii}</TableCell>
                <TableCell>{team.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
