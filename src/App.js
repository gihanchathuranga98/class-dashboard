import { Grid } from '@mui/material';
import './App.css';
import Sidebar from './Elements/SIdebar/ResponsiveDrawer'
import SimpleInfoCard from './Elements/SimpleInfoCard/SimpleInfoCard';

function App() {
  return (
    <Sidebar>
      <Grid container spacing={2}>
                <Grid item lg={3} md={6} sm={6} xs={12}>
                <SimpleInfoCard title={'Number of members'} value={2540} sx={{backgroundColor: 'secondary.light'}}/>
                </Grid>
                <Grid item lg={3} md={6} sm={6} xs={12}>
                <SimpleInfoCard title={'Number of members'} value={2540} sx={{backgroundColor: 'warning.light'}}/>
                </Grid>
                <Grid item lg={3} md={6} sm={6} xs={12}>
                <SimpleInfoCard title={'Number of members'} value={2540} sx={{backgroundColor: 'success.light'}}/>
                </Grid>
                <Grid item lg={3} md={6} sm={6} xs={12}>
                <SimpleInfoCard title={'Number of members'} value={2540} sx={{backgroundColor: 'error.light'}}/>
                </Grid>
            </Grid>
    </Sidebar>
  );
}

export default App;
