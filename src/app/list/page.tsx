'use client';

import React, { useState } from 'react';
import { TextField, Button, Box, Typography, TextareaAutosize } from '@mui/material';

const IPGenerator = () => {
    const [teams, setTeams] = useState('');
    const [finalOctet, setFinalOctet] = useState('');
    const [generatedIPs, setGeneratedIPs] = useState('');

    const generateIPs = () => {
        const teamsCount = parseInt(teams, 10);
        // Splitting finalOctet by comma and trimming spaces to support inputs like "1, 2, 3"
        const finalOctets = finalOctet.split(',').map(octet => parseInt(octet.trim(), 10));

        if (isNaN(teamsCount) || finalOctets.some(isNaN)) {
            alert('Please enter valid numbers for teams and final octets.');
            return;
        }

        const thirdOctetStart = 101; // Starting value for the third octet

        // Generating IPs for each final octet
        const ips = finalOctets.flatMap(finalOctetValue =>
            Array.from({ length: teamsCount }, (_, i) => `10.100.${thirdOctetStart + i}.${finalOctetValue}`)
        ).join('\n');

        setGeneratedIPs(ips);
    };

    return (
        <Box sx={{ maxWidth: '30%', margin: 'auto', textAlign: 'center', paddingTop: 4 }}>
            <Typography variant="h6" mb={2}>IP Range Generator</Typography>
            <Typography variant="body1" mb={2}>Print a list of target IPs in the format 10.100.101-teams.octet</Typography>
            <Typography variant="body1" mb={2}>You can also use comma separated values for multiple final octets</Typography>
            <TextField
                label="Number of Teams"
                type="number"
                value={teams}
                onChange={(e) => setTeams(e.target.value)}
                margin="normal"
                InputProps={{ inputProps: { min: 1 } }}
            />
            {/* Adjusted the input type to text to allow comma-separated values */}
            <TextField
                label="Final Octet(s) (Y)"
                type="text"
                value={finalOctet}
                onChange={(e) => setFinalOctet(e.target.value)}
                margin="normal"
                helperText="Enter comma-separated values for multiple octets."
            />
            <Button
                variant="outlined"
                onClick={generateIPs}
                sx={{ mt: 2, color: 'primary.main', borderColor: 'primary.main', '&:hover': { bgcolor: 'primary.light', borderColor: 'primary.dark' } }}
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
                        sx={{ mt: 1, color: 'primary.main', borderColor: 'primary.main', '&:hover': { bgcolor: 'primary.light', borderColor: 'primary.dark' } }}
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
