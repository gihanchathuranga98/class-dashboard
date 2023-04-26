import React from 'react'
import FormElement from '../../common/Elements/FormElement/FormElement'
import NewTextField from '../../common/Elements/TextFields/NewTextField'
import NewSelect from '../../common/Elements/Select/NewSelect'
import { Button, Grid } from '@mui/material'

const AddNewInstitute = () => {
  return (
    <>
        <FormElement title={'Add New Institute'} sub={'Plese fill out all of the required fields.'} top={'10vh'}>
            <NewTextField label={'Name of the institute'} id={'inst'}/>
            <NewTextField label={'Name of the owner'} id={'owner'}/>
            <NewTextField label={'Contact No.'} id={'contact'} type={'number'}/>
            <NewTextField label={'Payment date'} id={'pay-date'}/>
            <NewSelect none label={'Payment type'} id={'pay-type'}>
                <option>One Time Payment</option>
                <option>Monthly Payment</option>
                <option>Yearly Payment</option>
                <option>Trial Period</option>
            </NewSelect>
            <NewTextField label={'Payment'} type={'number'} id={'payment'}/>
            <Grid container fullWidth spacing={1} marginY={2}>
                <Grid item xs={12} md={6}>
                    <Button variant='outlined' fullWidth>Clear</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button variant='contained' fullWidth>Sumbit</Button>
                </Grid>
            </Grid>
        </FormElement>
    </>
  )
}

export default AddNewInstitute