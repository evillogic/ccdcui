'use client';

import React, { useState } from 'react';
import { TextField, Button, Box, Typography, TextareaAutosize } from '@mui/material';

const IPGenerator = () => {
    const [teams, setTeams] = useState(''); // User inputs number of teams here
    const [finalOctet, setFinalOctet] = useState('');
    const [generatedIPs, setGeneratedIPs] = useState('');

    const generateIPs = () => {
        const teamsCount = parseInt(teams, 10);
        const finalOctetValue = parseInt(finalOctet, 10);

        if (isNaN(teamsCount) || isNaN(finalOctetValue)) {
            alert('Please enter valid numbers for teams and final octet.');
            return;
        }

        const thirdOctetStart = 101; // Starting value for the third octet

        const ips = Array.from({ length: teamsCount }, (_, i) => `10.100.${thirdOctetStart + i}.${finalOctetValue}`).join('\n');

        setGeneratedIPs(ips);
    };

    return (
        <Box sx={{ maxWidth: 400, margin: 'auto', textAlign: 'center', paddingTop: 4 }}>
            <Typography variant="h6" mb={2}>IP Range Generator</Typography>
            <TextField
                label="Number of Teams"
                type="number"
                value={teams}
                onChange={(e) => setTeams(e.target.value)}
                margin="normal"
                InputProps={{ inputProps: { min: 1 } }}
            />
            <TextField
                label="Final Octet (Y)"
                type="number"
                value={finalOctet}
                onChange={(e) => setFinalOctet(e.target.value)}
                margin="normal"
            />
            <Button
                variant="outlined"
                color="primary"
                onClick={generateIPs}
                sx={{ mt: 2, bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' } }}
            >
                Generate IPs
            </Button>
            {generatedIPs && (
                <>
                    <Typography variant="body1" sx={{ mt: 2 }}>Generated IPs:</Typography>
                    <TextareaAutosize
                        minRows={3}
                        value={generatedIPs}
                        readOnly
                        style={{ width: '100%', marginTop: '8px' }}
                    />
                    <Button
                        variant="outlined"
                        sx={{ mt: 1 }}
                        onClick={() => navigator.clipboard.writeText(generatedIPs)}
                    >
                        Copy to Clipboard
                    </Button>
                </>
            )}
        </Box>
    );
};

export default IPGenerator;
