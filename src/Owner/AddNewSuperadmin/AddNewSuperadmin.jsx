import React from 'react'
import FormElement from '../../common/Elements/FormElement/FormElement'
import NewTextField from '../../common/Elements/TextFields/NewTextField'
import NewSelect from '../../common/Elements/Select/NewSelect'
import { Button, Grid } from '@mui/material'

const AddNewSuperadmin = () => {
  return (
    <>
        <form>
            <FormElement title={'Create New Super Admin'} sub={'Please fill out all of the required fields.'} top={'5vh'}>
                <NewSelect label={'Select Institute'} none >
                    <option>Revotech Solutions</option>
                    <option>Mambek Solutions</option>
                </NewSelect>
                <NewTextField label={'Name of super admin'} id={'superadmin'} />
                <NewTextField type={'number'} label={'Contact No.'} id={'contact'} />
                <NewTextField type={'email'} label={'Email'} id={'email'} />
                <NewTextField type={'password'} label={'Password'} id={'pwd'} />
                <NewTextField type={'password'} label={'Confirm Password'} id={'cnfrmpwd'} />
                <Grid container spacing={1} marginY={2}>
                    <Grid item xs={12} md={6}> 
                        <Button fullWidth variant='outlined'>Clear</Button>
                    </Grid>
                    <Grid item xs={12} md={6}> 
                        <Button fullWidth variant='contained'>Submit</Button>
                    </Grid>
                </Grid>
            </FormElement>
        </form>
    </>
  )
}

export default AddNewSuperadmin