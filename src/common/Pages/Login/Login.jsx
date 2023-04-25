import { Box, Button } from '@mui/material'
import React from 'react'
import FormElement from '../../Elements/FormElement/FormElement'
import NewTextField from '../../Elements/TextFields/NewTextField'
import NewCheckbox from '../../Elements/Checkbox/NewCheckbox'

const Login = () => {
  return (
    <>
        <FormElement title={'LOGIN'} sub={'Please fill all of the required fields.'} top={'12vh'}>
            <NewTextField label={'Username'} required id={'username'} name={'username'} placeholder={'abc@email.com'}/>
            <NewTextField label={'Password'} type={'password'} required id={'pwd'} name={'pwd'} placeholder={'Enter your password'}/>
            <NewCheckbox label={'Remember me'} sx={{marginLeft: 1, marginTop: 0}}/>
            <Box marginX={1} marginBottom={1}>
            <Button fullWidth variant='contained'>Login</Button>
            </Box>
            <Box marginX={1}>
            <Button fullWidth>Forgot password</Button>
            </Box>
        </FormElement>
    </>
  )
}

export default Login;