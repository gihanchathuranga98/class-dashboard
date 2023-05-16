import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function NewTimePicker({label, value}) {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DemoContainer components={['TimePicker']} sx={{marginTop: 0.5}}>
        <TimePicker label={label} value={value} sx={{width: '100%'}} slotProps={{ textField: { size: 'small' } }} />
      </DemoContainer>
    </LocalizationProvider>
  );
}