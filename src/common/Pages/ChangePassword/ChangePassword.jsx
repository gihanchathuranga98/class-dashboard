import React from 'react'
import FormElement from '../../Elements/FormElement/FormElement'
import NewTextField from '../../Elements/TextFields/NewTextField'
import { Box, Button } from '@mui/material'

const ChangePassword = () => {
  return (
    <>
        <FormElement title={'Change Password'} sub={'Please fill all of the required fields.'} top={'13vh'}>
            <NewTextField type={'password'} label={'Current Password'}/>
            <NewTextField type={'password'} label={'New Password'}/>
            <NewTextField type={'password'} label={'Confirm Password'}/>
            <Box paddingX={2} marginY={2} marginX={'auto'}>
                <Button fullWidth variant='contained' type='submit'>Change Password</Button>
            </Box>
        </FormElement>
    </>
  )
}

export default ChangePassword;