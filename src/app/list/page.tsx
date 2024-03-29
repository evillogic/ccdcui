'use client';
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, TextareaAutosize, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const IPGenerator = () => {
    const [teams, setTeams] = useState('');
    const [finalOctet, setFinalOctet] = useState('');
    const [subnetStyle, setSubnetStyle] = useState('Western');
    const [generatedIPs, setGeneratedIPs] = useState('');

    // Function to process ranges and individual numbers in final octets
    const processFinalOctets = (input) => {
        const parts = input.split(',');
        const finalOctets = [];
        parts.forEach(part => {
            if (part.includes('-')) {
                const [start, end] = part.split('-').map(Number);
                for (let i = start; i <= end; i++) {
                    finalOctets.push(i);
                }
            } else {
                finalOctets.push(parseInt(part, 10));
            }
        });
        return finalOctets;
    };

    const generateIPs = () => {
        const teamsCount = parseInt(teams, 10);
        const finalOctets = processFinalOctets(finalOctet);

        if (isNaN(teamsCount) || finalOctets.some(isNaN)) {
            alert('Please enter valid numbers for teams and final octets.');
            return;
        }

        let ips;
        if (subnetStyle === 'Western') {
            const thirdOctetStart = 101;
            ips = finalOctets.flatMap(finalOctetValue =>
                Array.from({ length: teamsCount }, (_, i) => `10.100.${thirdOctetStart + i}.${finalOctetValue}`)
            ).join('\n');
        } else if (subnetStyle === 'At Large') {
            ips = finalOctets.flatMap(finalOctetValue =>
                Array.from({ length: teamsCount }, (_, i) => `10.${10 * (i + 1)}.${10 * (i + 1)}.${finalOctetValue}`)
            ).join('\n');
        }

        setGeneratedIPs(ips);
    };

    return (
        <Box sx={{ maxWidth: '30%', margin: 'auto', textAlign: 'center', paddingTop: 4 }}>
            <Typography variant="h6" mb={2}>IP Range Generator</Typography>
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="subnet-style-label">Subnet Style</InputLabel>
                <Select
                    labelId="subnet-style-label"
                    value={subnetStyle}
                    label="Subnet Style"
                    onChange={(e) => setSubnetStyle(e.target.value)}
                >
                    <MenuItem value="Western">Western</MenuItem>
                    <MenuItem value="At Large">At Large</MenuItem>
                </Select>
            </FormControl>
            <TextField
                label="Number of Teams"
                type="number"
                value={teams}
                onChange={(e) => setTeams(e.target.value)}
                margin="normal"
                InputProps={{ inputProps: { min: 1 } }}
            />
            <TextField
                label="Final Octet(s) (Y)"
                type="text"
                value={finalOctet}
                onChange={(e) => setFinalOctet(e.target.value)}
                margin="normal"
                helperText="Enter comma-separated values or ranges for multiple octets."
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
