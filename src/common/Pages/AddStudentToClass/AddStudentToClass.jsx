import React from 'react';
import FormElement from '../../Elements/FormElement/FormElement'
import NewSelect from '../../Elements/Select/NewSelect';
import NewTextField from '../../Elements/TextFields/NewTextField';
import { Button, Grid } from '@mui/material';

const AddStudentToClass = () => {
  return (
    <>
        <form>
            <FormElement title={'Add New Student'} sub={'Please fill all of the required details'} top={'10vh'}>
                <NewSelect none label={'Select Teacher'}>
                    <option>Gihan</option>
                    <option>Attanayake</option>
                </NewSelect>
                <NewSelect label={'Select class'} none>
                    <option>Class One</option>
                    <option>Class Two</option>
                </NewSelect>
                <NewTextField label={'Barcode'}/>
                <NewTextField disabled label={'Name of the student'}/>
                <NewTextField disabled label={'Birthday'}/>
                <NewTextField disabled label={'Mobile No.'}/>
                <Grid container spacing={2} marginY={1}> 
                    <Grid item xs={6}>
                        <Button fullWidth variant='outlined' type='clear'>Clear</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button fullWidth variant='contained' type='submit'>Submit</Button>
                    </Grid>
                </Grid>
            </FormElement>
        </form>
    </>
  )
}

export default AddStudentToClass