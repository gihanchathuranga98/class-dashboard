import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function NewDatePicker({label, value}) {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DemoContainer components={['DatePicker']} sx={{marginTop: 0.5}}>
        <DatePicker label={label} value={value} sx={{width: '100%'}} slotProps={{ textField: { size: 'small' } }}/>
      </DemoContainer>
    </LocalizationProvider>
  );
}