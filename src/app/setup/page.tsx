'use client';

import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const SetupTeamsPage: React.FC = () => {
  const [teamCount, setTeamCount] = useState('10');

  const handleSetupTeams = async () => {
    try {
        const response = await fetch('/api/setup', {
            method: 'POST',
        body: JSON.stringify({ teamCount: parseInt(teamCount, 10) }),});
      alert(await response.text());
    } catch (error) {
      console.error('Error setting up teams:', error);
      alert('Failed to setup teams.');
    }
  };

  const cleanup = async () => {
    try {
      const response = await fetch('/api/clean', {
        method: 'POST'
      });
      alert(await response.text());
    } catch (error) {
      console.error('Error cleaning up:', error);
      alert('Failed to clean up.');
    }
  }

  return (
    <Box sx={{ maxWidth: 500, margin: '0 auto', textAlign: 'center', pt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Setup Teams
      </Typography>
      <TextField
        fullWidth
        label="Number of Teams"
        variant="outlined"
        value={teamCount}
        onChange={(e) => setTeamCount(e.target.value)}
        type="number"
        sx={{ mb: 2 }}
      />
      <Button onClick={handleSetupTeams} variant="outlined">
        Create Teams
      </Button>
      <Button onClick={cleanup} variant="outlined" color="error">
        Delete All Data
      </Button>
    </Box>
  );
};

export default SetupTeamsPage;
