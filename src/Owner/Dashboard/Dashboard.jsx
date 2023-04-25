import React from 'react'
import SimpleInfoCard from '../../common/Elements/SimpleInfoCard/SimpleInfoCard'
import { Grid } from '@mui/material'

const Dashboard = () => {
  return (
    <>
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
    </>
  )
}

export default Dashboard