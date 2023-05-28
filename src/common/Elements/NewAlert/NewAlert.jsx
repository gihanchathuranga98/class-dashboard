import React, { useState } from 'react';
import { Alert, Snackbar } from "@mui/material";


const NewAlert = ({message, type, open, onClose, sx}) => {

  switch(type){
    case 'success':
      return (
        <Snackbar  anchorOrigin={{vertical: 'top', horizontal: 'right'}} open={open} autoHideDuration={6000} onClose={onClose}>
          <Alert onClose={onClose} severity={type} sx={{ width: '100%' , borderStyle: 'solid', borderColor: 'green', borderWidth: 3, ...sx}}>
            {message}
          </Alert>
        </Snackbar>
      )

      case 'error':
        return (
          <Snackbar  anchorOrigin={{vertical: 'top', horizontal: 'right'}} open={open} autoHideDuration={6000} onClose={onClose}>
            <Alert onClose={onClose} severity={type} sx={{ width: '100%' , borderStyle: 'solid', borderColor: 'red', borderWidth: 3, ...sx}}>
              {message}
            </Alert>
          </Snackbar>
        )
      
      case 'warning':
        return (
          <Snackbar  anchorOrigin={{vertical: 'top', horizontal: 'right'}} open={open} autoHideDuration={6000} onClose={onClose}>
            <Alert onClose={onClose} severity={type} sx={{ width: '100%' , borderStyle: 'solid', borderColor: 'green', borderWidth: 3, ...sx}}>
              {message}
            </Alert>
          </Snackbar>
        )

      case 'info':
        return (
          <Snackbar  anchorOrigin={{vertical: 'top', horizontal: 'right'}} open={open} autoHideDuration={6000} onClose={onClose}>
            <Alert onClose={onClose} severity={type} sx={{ width: '100%' , borderStyle: 'solid', borderColor: 'green', borderWidth: 3, ...sx}}>
              {message}
            </Alert>
          </Snackbar>
        )
  }

  return (
    <>
        
    </>
  )
}

export default NewAlert;