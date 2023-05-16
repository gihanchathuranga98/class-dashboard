//this component will keep here for use in future if needed.

import React from 'react'
import FormElement from '../../Elements/FormElement/FormElement'
import NewTextField from '../../Elements/TextFields/NewTextField'
import { Button, Grid } from '@mui/material'

const JustAddNewStudent = () => {
  return (
    <>
        <form>
            <FormElement title={'Add New Student'} sub={'Please fill all of the required fields.'}>
                <NewTextField label={"Student Name"}/>
                <NewTextField label={"Mobile No."} type={'number'}/>
                <NewTextField label={"Birth Day"}/>
                <NewTextField label={"Barcode"}/>
                <Grid container spacing={2} marginY={1}>
                    <Grid item xs={12} md={6}>
                        <Button varient={'outlined'} fullWidth>Clear</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button varient={'contained'} fullWidth>Submit</Button>
                    </Grid>
                </Grid>
            </FormElement>
        </form>
    </>
  )
}

export default JustAddNewStudent