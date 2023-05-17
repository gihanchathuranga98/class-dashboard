import React from 'react'
import FormElement from '../../Elements/FormElement/FormElement'
import NewSelect from '../../Elements/Select/NewSelect'
import NewTextField from '../../Elements/TextFields/NewTextField'
import { Button, Grid } from '@mui/material'

const MarkPaymentsBarcode = () => {

  return (
    <>
        <form>
            <FormElement title={'Mark Attendance'} sub={'Plese enter the barcode number.'} top={'10vh'}>
                <NewTextField label={'Payment Period'} value={'2023, May'} disabled/>
                <Button variant='contained' fullWidth sx={{marginTop: 1.5}} disableElevation>PAID</Button>
                <NewSelect none label={'Select Teacher'}>
                    <option>Gihan</option>
                    <option>Attanayake</option>
                </NewSelect>
                <NewSelect none label={'Select Teacher'}>
                    <option>Gihan</option>
                    <option>Attanayake</option>
                </NewSelect>
                <NewTextField label={'Barcode'}/>
                <br/>
                <Grid container spacing={2} marginY={1}>
                    <Grid item xs={12} md={6}>
                        <Button variant='outlined' fullWidth>Clear</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button variant='contained' fullWidth>Paid</Button>
                    </Grid>
                </Grid>
            </FormElement>
        </form>
    </>
  )
}

export default MarkPaymentsBarcode