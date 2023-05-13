import React from 'react'
import FormElement from '../../Elements/FormElement/FormElement'
import NewTextField from '../../Elements/TextFields/NewTextField'
import NewSelect from '../../Elements/Select/NewSelect'
import { Button, Grid } from '@mui/material'

const AddNewClass = () => {
  return (
    <>
        <FormElement title={'Add New Class'} sub={'Please select all of the required fields'} top={'5vh'}>
            <NewSelect label={'Select a Teacher'} none>
                <option>Gihan Chathuranga</option>
                <option>Gihan Attanayake</option>
            </NewSelect>
            <NewTextField required label={'Subject'}/>
            <NewTextField required label={'Grade'}/>
            <NewSelect label={'Class Day'} none required>
                <option>Sunday</option>
                <option>Monday</option>
            </NewSelect>
            <NewTextField label={'Class start time'}/>
            <NewTextField label={'Class end time'}/>
            <NewTextField label={'Class fee'}/>
            <NewTextField label={'Class commition'}/>
            <Grid container spacing={2} marginY={1}>
                <Grid item xs={6}>
                    <Button variant='outlined' fullWidth type='clear'>Clear</Button>
                </Grid>
                <Grid item xs={6} spacing={2}>
                    <Button variant='contained' fullWidth type='submit'>Submit</Button>
                </Grid>
            </Grid>
        </FormElement>
    </>
  )
}

export default AddNewClass