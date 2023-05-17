import React from 'react'
import FormElement from '../../Elements/FormElement/FormElement'
import NewSelect from '../../Elements/Select/NewSelect'
import NewTextField from '../../Elements/TextFields/NewTextField'
import { Button, Grid } from '@mui/material'

const MarkAttendanceBarcode = () => {

    const payment = true;

    const payment_stat = {
        paid: {
            text: 'PAID',
            color: 'success'
        },
        not_paid: {
            text: 'NOT PAID',
            color: 'error'
        }
    }

  return (
    <>
        <form>
            <FormElement title={"Mark Attendance"} sub={"Please enter the barcode in the field"} top={'10vh'}>
            <Button variant='contained' color={payment? payment_stat.paid.color : payment_stat.not_paid.color} fullWidth sx={{marginTop: 1, marginBottom: 1}}>{payment? payment_stat.paid.text : payment_stat.not_paid.text}</Button>
            <NewTextField label={'Name of Student'} disabled/>
                <NewTextField label={'Birthday'} disabled/>
                <br/>
                <NewSelect none label={'Select Teacher'}>
                    <option>Gihan</option>
                    <option>Attanayake</option>
                </NewSelect>
                <NewSelect none label={'Select Class'}>
                    <option>Class One</option>
                    <option>Class Two</option>
                </NewSelect>
                <NewTextField label={'Barcode'}/>
                <Grid container spacing={2} marginY={1}>
                    <Grid item xs={12} md={6}>
                        <Button fullWidth variant='outlined' type='clear'>Clear</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button fullWidth variant='contained' type='submit'>Attended</Button>
                    </Grid>
                </Grid>
            </FormElement>
        </form>
    </>
  )
}

export default MarkAttendanceBarcode