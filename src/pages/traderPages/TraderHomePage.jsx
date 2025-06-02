import React from 'react';
import {
  Box,
  Typography,
  Badge,
  Grid,
  Paper,
  Avatar,
  IconButton
} from '@mui/material';
import { Home, Mail, User } from 'lucide-react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const StatCard = ({ title, urgent, nonUrgent, badgeCount }) => (
  <Badge badgeContent={badgeCount} color="primary">
    <Paper elevation={1} sx={{ p: 2, border: '1px solid #086cfc', borderRadius: 2, width: '100%' }}>
      <Typography variant="subtitle1" fontWeight="bold" sx={{ color: '#086cfc' }}>{title}</Typography>
      <Typography variant="body2">{urgent} urgent</Typography>
      <Typography variant="body2">{nonUrgent} non-urgent</Typography>
    </Paper>
  </Badge>
);

const TraderHomePage = () => {
  return (
    <Box sx={{ p: 2 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" fontWeight="bold">Home - Trader</Typography>
        <Avatar src="/profile.jpg" alt="Profile" />
      </Box>

      {/* Status Cards */}
      <Grid container spacing={2}>
        <Grid item xs={6}><StatCard title="To Quote Requests" urgent={0} nonUrgent={1} badgeCount={0} /></Grid>
        <Grid item xs={6}><StatCard title="Pending Quotes" urgent={0} nonUrgent={1} badgeCount={0} /></Grid>
        <Grid item xs={6}><StatCard title="Jobs Today" urgent={3} nonUrgent={6} badgeCount={9} /></Grid>
        <Grid item xs={6}><StatCard title="Jobs Approved" urgent={0} nonUrgent={2} badgeCount={2} /></Grid>
      </Grid>

      {/* New Messages */}
      <Box sx={{ mt: 4 }}>
        <Typography fontWeight="bold" color="#086cfc">New Messages</Typography>
        <Paper elevation={1} sx={{ mt: 1, p: 2, borderRadius: 2 }}>
          <Typography>No new messages at the moment.</Typography>
        </Paper>
      </Box>

      {/* Calendar */}
      <Box sx={{ mt: 4 }}>
        <Typography fontWeight="bold" color="#086cfc">Calendar</Typography>
        <Paper elevation={0} sx={{ mt: 1, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: 2 }}>
          <IconButton><FiChevronLeft /></IconButton>
          <Typography>June 2024</Typography>
          <IconButton><FiChevronRight /></IconButton>
        </Paper>
      </Box>

      {/* Bottom Navigation */}
      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, borderTop: '1px solid #ccc', display: 'flex', justifyContent: 'space-around', p: 1, backgroundColor: '#fff' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#086cfc' }}>
          <Home size={20} />
          <Typography variant="caption">Home</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#999' }}>
          <Mail size={20} />
          <Typography variant="caption">Messages</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#999' }}>
          <User size={20} />
          <Typography variant="caption">Account</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TraderHomePage;
