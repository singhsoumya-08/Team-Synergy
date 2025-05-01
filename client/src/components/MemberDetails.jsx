import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box
} from '@mui/material';

export default function MemberDetails() {
  const { id } = useParams();
  const [m, setM] = useState(null);

  useEffect(() => {
    axios.get(`/api/members/${id}`).then(res => setM(res.data));
  }, [id]);

  if (!m) return <Typography>Loading…</Typography>;

  return (
    <Card sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 2 }}>
      {m.image && (
        <CardMedia
          component="img"
          height="300"
          image={`/uploads/${m.image}`}
          alt={m.name}
        />
      )}
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {m.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Role:</strong> {m.role}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Email:</strong> {m.email}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Contact:</strong> {m.contact}
        </Typography>
        <Box mt={2}>
          <Button variant="outlined" component={Link} to="/view-members">
            ← Back to list
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
