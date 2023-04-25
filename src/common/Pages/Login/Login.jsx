import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import FormElement from '../../Elements/FormElement/FormElement'
import NewTextField from '../../Elements/TextFields/NewTextField'

const Login = () => {
  return (
    <>
        <FormElement title={'LOGIN'} sub={'Please fill all of the required fields.'}>
            <NewTextField label={'Username'} required id={'username'} name={'username'} placeholder={'abc@email.com'}/>
            <NewTextField label={'Password'} type={'password'} required id={'pwd'} name={'pwd'} placeholder={'Enter your password'}/>
        </FormElement>
    </>
  )
}

export default Login