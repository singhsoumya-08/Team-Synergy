import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Stack
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddMember() {
  const [form, setForm] = useState({
    name: '',
    role: '',
    email: '',
    contact: ''
  });
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();

    // append text fields
    Object.entries(form).forEach(([key, value]) =>
      data.append(key, value)
    );
    // append file under the same field name multer expects
    if (file) data.append('image', file);

    try {
      // Let Axios set the Content-Type (with boundary) automatically
      await axios.post('/api/members', data);
      navigate('/view-members');
    } catch (err) {
      console.error('Upload error:', err);
    }
  };

  return (
    <Paper sx={{ maxWidth: 600, mx: 'auto', p: 4 }} elevation={3}>
      <Typography variant="h4" gutterBottom>
        Add New Member
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Role"
            name="role"
            value={form.role}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Contact No."
            name="contact"
            value={form.contact}
            onChange={handleChange}
            required
            fullWidth
          />
          <Button variant="outlined" component="label">
            Upload Profile Image
            <input
              type="file"
              name="image"
              hidden
              accept="image/*"
              onChange={e => setFile(e.target.files[0])}
            />
          </Button>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}
