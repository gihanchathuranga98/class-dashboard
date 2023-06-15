import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FormHelperText } from "@mui/material";

export default function NewDatePicker({
  label,
  value,
  onChange,
  helper,
  err,
  id,
  name
}) {

  const handleChangeDate = (event) => {
    onChange({target: {name: name, value: event._d}})
  }

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DemoContainer
        error={true}
        components={["DatePicker"]}
        sx={{ marginTop: 0.5 }}
      >
        <DatePicker
          id={id}
          label={label}
          value={value}
          onChange={handleChangeDate}
          sx={{ width: "100%" }}
          slotProps={{ textField: { size: "small", error: err } }}
          closeOnSelect
        />
      </DemoContainer>
      {helper && (
        <FormHelperText sx={{ marginLeft: 2 }} error={err}>
          {helper}
        </FormHelperText>
      )}
    </LocalizationProvider>
  );
}
