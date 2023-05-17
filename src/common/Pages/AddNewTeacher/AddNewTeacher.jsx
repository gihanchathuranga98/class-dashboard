import React from 'react'
import FormElement from '../../Elements/FormElement/FormElement'
import NewTextField from '../../Elements/TextFields/NewTextField';
import { Button, Grid } from '@mui/material';

const AddNewTeacher = () => {
  return (
    <FormElement title={'Add New Teacher'} sub={'Please fill all of the required details.'} top={'10vh'}>
        <form>
            <NewTextField label={'Name of the teacher'} id={'t_name'}/>
            <NewTextField label={'Mobile No.'} id={'t_name'} type={'number'}/>
            <NewTextField label={'Email'} id={'t_name'} type={'email'}/>
            <NewTextField label={'Password'} id={'t_name'} name={'t_name'} type={'password'}/>
            <NewTextField label={'Confirm Password'} id={'t_name'} name={'t_name'} type={'password'}/>
            <Grid container marginY={1} spacing={2}>
                <Grid item xs={6}>
                    <Button type='clear' fullWidth variant='outlined'>Clear</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button type='submit' fullWidth variant='contained'>Submit</Button>
                </Grid>
            </Grid>
        </form>
    </FormElement>
  )
}

export default AddNewTeacher;