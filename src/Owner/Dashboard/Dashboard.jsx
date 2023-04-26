import React from 'react'
import SimpleInfoCard from '../../common/Elements/SimpleInfoCard/SimpleInfoCard'
import { Grid, Typography } from '@mui/material'
import MyTable from './Table/Table'
import data from './data.json'

const Dashboard = () => {

    const columns = [
        {
          Header: 'Institute ID',
          accessor: 'id'
        },
        {
          Header: 'Institute Name',
          accessor: 'inst-name'
        },
        {
          Header: 'Owner Name',
          accessor: 'owner-name'
        },
        {
          Header: 'Contact No.',
          accessor: 'contact-no'
        },
        {
          Header: 'Payment Type',
          accessor: 'payment-type'
        },
        {
          Header: 'Payment Date',
          accessor: 'payment-date'
        },
        {
          Header: 'Payment',
          accessor: 'payment'
        }
      ]

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
        <Typography variant='h5' sx={{marginTop: 5}}>Details of Institutes</Typography>
        <MyTable COLUMNS={columns} table_data={data} search_title={'Search Institutes'} />
    </>
  )
}

export default Dashboard