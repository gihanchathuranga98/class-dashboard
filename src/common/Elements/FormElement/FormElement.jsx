import { Grid, Typography } from '@mui/material'
import React from 'react'

const FormElement = ({children, title, sub}) => {
  return (
    <>
        <Grid container sx={{marginTop: '10vh'}}>
            <Grid item lg={5} md={6} sm={8} xs={12} boxShadow={5} marginX={'auto'} marginY={4} paddingX={2} paddingY={2} sx={{borderRadius: 2}}>
                <Typography sx={{textAlign: 'center', fontWeight: 'bold'}} color={'primary'} variant='h5'>{title}</Typography>
                <Typography sx={{textAlign: 'center', marginBottom: 2}}  variant='subtitle1'>{sub}</Typography>
                {children}
            </Grid>
        </Grid>
    </>
  )
}

export default FormElement