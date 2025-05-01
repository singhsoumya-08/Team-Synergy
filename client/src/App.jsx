import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AddMember from './components/AddMember';
import ViewMembers from './components/ViewMembers';
import MemberDetails from './components/MemberDetails';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container
} from '@mui/material';

export default function App() {
  return (
    <BrowserRouter>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Team Tracker
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/add-member">
            Add Member
          </Button>
          <Button color="inherit" component={Link} to="/view-members">
            View Members
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-member" element={<AddMember />} />
          <Route path="/view-members" element={<ViewMembers />} />
          <Route path="/members/:id" element={<MemberDetails />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}