import React from 'react';
import { Box, Typography, Grid, TextField, Avatar, AppBar, Toolbar } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'grey.100', p: 3 }}>
            <AppBar position="static" elevation={0} sx={{ bgcolor: 'transparent', mb: 2 }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <TextField
                        placeholder="Type in to search"
                        variant="outlined"
                        size="small"
                        sx={{ bgcolor: 'white', width: '33%' }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography variant="body1">Jason Doe</Typography>
                        <Avatar src="https://placehold.co/40x40" />
                    </Box>
                </Toolbar>
            </AppBar>

            <Typography variant="h4" gutterBottom>
                Shire County Public Schools
            </Typography>

            <Grid container spacing={2} mb={4}>
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ bgcolor: '#6B46C1', color: 'white', p: 3, borderRadius: 1, boxShadow: 3 }}>
                        <Typography variant="subtitle1">Enrollment Count</Typography>
                        <Typography variant="h5">17,910</Typography>
                        <Typography variant="body2">Students</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ bgcolor: '#ED8936', color: 'white', p: 3, borderRadius: 1, boxShadow: 3 }}>
                        <Typography variant="subtitle1">Gifted Students</Typography>
                        <Typography variant="h5">1,071</Typography>
                        <Typography variant="body2">High School</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ bgcolor: '#D53F8C', color: 'white', p: 3, borderRadius: 1, boxShadow: 3 }}>
                        <Typography variant="subtitle1">Attendance Rate</Typography>
                        <Typography variant="h5">99.1%</Typography>
                        <Typography variant="body2">Exceeds state average</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ bgcolor: '#38B2AC', color: 'white', p: 3, borderRadius: 1, boxShadow: 3 }}>
                        <Typography variant="subtitle1">Georgia Milestones</Typography>
                        <Typography variant="h5">Proficient</Typography>
                        <Typography variant="body2">40.2% EOG MATH</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom>
                Teacher attendance rate
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <Typography>Last year</Typography>
                <Typography>Last 120 days</Typography>
                <Typography sx={{ borderBottom: '2px solid', borderColor: '#3182CE' }}>
                    Last 30 days
                </Typography>
                <Typography>Last 7 days</Typography>
            </Box>

            <Box sx={{ bgcolor: 'white', p: 3, borderRadius: 1, boxShadow: 3 }}>
                <Box sx={{ textAlign: 'center', position: 'relative', mb: 3 }}>
                    <Box
                        sx={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            bgcolor: 'white',
                            p: 1,
                            borderRadius: 1,
                            boxShadow: 1,
                        }}
                    >
                        <Typography variant="h6">96.3%</Typography>
                        <Typography variant="body2">Agatha, Susan</Typography>
                        <Typography variant="caption" color="error">
                            ↓ 1 day
                        </Typography>
                    </Box>
                    <svg
                        viewBox="0 0 1440 320"
                        style={{ width: '100%', height: 200 }}
                    >
                        <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path
                            fill="url(#gradient)"
                            d="M0,160L80,144C160,128,320,96,480,112C640,128,800,192,960,192C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                        />
                    </svg>
                </Box>
            </Box>
        </Box>
    </Box>
);
};

export default Home;
