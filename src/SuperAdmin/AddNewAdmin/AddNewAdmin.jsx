import React from 'react'
import FormElement from '../../common/Elements/FormElement/FormElement'
import NewTextField from '../../common/Elements/TextFields/NewTextField'
import { Button, Grid } from '@mui/material'

const AddNewAdmin = () => {
  return (
    <>
        <form>
            <FormElement title={'Create An Admin'} sub={'please fill-out all of the required fields'} top={'10vh'}>
                <NewTextField label={'First Name'}/>
                <NewTextField label={'Last Name Name'}/>
                <NewTextField label={'Mobile No.'} type={'number'}/>
                <NewTextField label={'Email'} type={'email'}/>
                <NewTextField label={'Password'} type={'password'}/>
                <NewTextField label={'Confirm Password'} type={'password'}/>
                <Grid container spacing={2} marginY={1}>
                    <Grid item xs={12} md={6}>
                        <Button variant='outlined' fullWidth>Clear</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button variant='contained' fullWidth>Submit</Button>
                    </Grid>
                </Grid>
            </FormElement>
        </form>
    </>
  )
}

export default AddNewAdmin