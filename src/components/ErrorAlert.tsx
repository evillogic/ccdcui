import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function ErrorAlert() {
  // State to control the visibility of the alert
  const [showError, setShowError] = useState(true);

  // Function to handle the closing of the alert
  const handleClose = () => {
    setShowError(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      {showError && (
        <Alert severity="error" onClose={handleClose}>
          Error check console
        </Alert>
      )}
    </Stack>
  );
}