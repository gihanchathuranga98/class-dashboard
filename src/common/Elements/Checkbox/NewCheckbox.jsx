import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'

const NewCheckbox = ({value, label, position, sx, color}) => {
  return (
    <>
        <FormControlLabel
         sx={sx}
          value={value}
          control={<Checkbox color={color || 'primary'}/>}
          label={label}
          labelPlacement={position || 'end'}
        />
    </>
  )
}

export default NewCheckbox