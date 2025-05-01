import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function ViewMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get('/api/members').then(res => setMembers(res.data));
  }, []);

  return (
    <Grid container spacing={4}>
      {members.map(m => (
        <Grid item xs={12} sm={6} md={4} key={m._id}>
          <Card>
            {m.image && (
              <CardMedia
                component="img"
                height="200"
                image={`/uploads/${m.image}`}
                alt={m.name}
              />
            )}
            <CardContent>
              <Typography variant="h6">{m.name}</Typography>
              <Typography color="text.secondary">{m.role}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} to={`/members/${m._id}`}>
                View Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}