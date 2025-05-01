import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Box textAlign="center" mt={8}>
      <Typography variant="h3" gutterBottom>
        Welcome to Team Tracker
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Manage your student team members seamlessly.
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
        <Button variant="contained" component={Link} to="/add-member">
          Add Member
        </Button>
        <Button variant="contained" component={Link} to="/view-members">
          View Members
        </Button>
      </Stack>
    </Box>
  );
}