'use client';

import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const SetupTeamsPage: React.FC = () => {
  const [teamCount, setTeamCount] = useState('');

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
      <Button variant="contained" onClick={handleSetupTeams}>
        Create Teams
      </Button>
    </Box>
  );
};

export default SetupTeamsPage;
