import React from 'react';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useRouter } from 'next/navigation';
import IndicatorTable from './InidicatorTable';

interface TeamTableProps {
    teams: string[];
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

const TeamTable: React.FC<TeamTableProps> = ({ teams }) => {
    const router = useRouter();
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
                <TableRow
                  key={team.id}
                  className="dataRow"
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
};

const newTeamTable: React.FC<TeamTableProps> = ({ teams }) => {
    const teamColumnMapping = {
        id: 'Team',
        liveServices: 'Live Services',
        collectedPii: 'Collected PII',
        score: 'Score',
        liveServicesPercentage: 'Live Services (%)',
    };
    return (
        <IndicatorTable dataObjects={teams} indicatorKey="liveServicesPercentage" linkKey="id" linkPath="/teams" columnMapping={teamColumnMapping} />
    );
};

export default newTeamTable;