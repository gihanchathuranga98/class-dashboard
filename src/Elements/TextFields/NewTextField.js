
/*
* ## props used in TextFields component
* - id
* - value
* - label
* - placeholder
* - name
* - onChange
* - err
* - type
*/

import React from "react";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import { Box, FormControl } from "@mui/material";

const NewTextField = ({type, id, value, label, placeholder, onChange, name, required, disabled, sx, err, helper}) => {

    const fieldType = type || 'text';

  return (
    <>
      <Box marginBottom={1.5}>
        <FormControl fullWidth>
            <TextField
                id={id}
                key={id}
                value={value}
                label={label}
                fullWidth
                size="small"
                placeholder={placeholder}
                name={name}
                variant="outlined"
                onChange={onChange}
                error={err}
                type={fieldType}
                required={required}
                disabled={disabled}
                sx={sx}
                
            />
            {helper && <FormHelperText error={err}>{helper}</FormHelperText>}
        </FormControl>
      </Box>
    </>
  );
};

export default NewTextField;
