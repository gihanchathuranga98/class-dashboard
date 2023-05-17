import React from 'react'
import SimpleInfoCard from '../../common/Elements/SimpleInfoCard/SimpleInfoCard'
import { Card, CardHeader, Grid, Typography } from '@mui/material'
import LineChart from '../../common/Elements/LineChart/LineChart'

const Dashboard = () => {
  return (
    <>
        <Grid container spacing={2}>
            <Grid item lg={3} md={6} sm={6} xs={12}>
            <SimpleInfoCard
                title={"Number of members"}
                value={2540}
                sx={{ backgroundColor: "secondary.light" }}
            />
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12}>
            <SimpleInfoCard
                title={"Number of members"}
                value={2540}
                sx={{ backgroundColor: "warning.light" }}
            />
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12}>
            <SimpleInfoCard
                title={"Number of members"}
                value={2540}
                sx={{ backgroundColor: "success.light" }}
            />
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12}>
            <SimpleInfoCard
                title={"Number of members"}
                value={2540}
                sx={{ backgroundColor: "error.light" }}
            />
            </Grid>
        </Grid>
        <Grid container spacing={2} marginY={2}>
            <Grid item xs={12}  lg={6}>
                <Card elevation={5} sx={{padding: 2}}>
                    <Typography color={'#000'} variant='h5'>Total Income</Typography>
                    <LineChart/>
                </Card>
            </Grid>
            <Grid item xs={12}  lg={6}>
                <Card elevation={5} sx={{padding: 2}}>
                    <Typography color={'#000'} variant='h5'>Total Students</Typography>
                    <LineChart/>
                </Card>
            </Grid>
        </Grid>
    </>
  )
}

export default Dashboard