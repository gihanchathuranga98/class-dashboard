import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';

export default function NewSelect({none, value, err, label, id, key, name, children, helper, onChange}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
      <>
          <Box marginTop={1.5}>
            <FormControl fullWidth error={err} size='small'>
                <InputLabel id={id}>{label}</InputLabel>
                <Select
                labelId={id}
                key={key}
                label={label}
                name={name}
                value={value || age}
                id={id}
                onChange={onChange || handleChange}
                native
                variant='outlined'
                >
                {none || false ? <option value=""></option> : null}
                  {children}
                </Select>
                <FormHelperText>{helper}</FormHelperText>
            </FormControl>
          </Box>
      </>
  );
}