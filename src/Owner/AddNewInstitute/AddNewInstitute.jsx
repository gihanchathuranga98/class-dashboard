import React from "react";
import FormElement from "../../common/Elements/FormElement/FormElement";
import NewTextField from "../../common/Elements/TextFields/NewTextField";
import NewSelect from "../../common/Elements/Select/NewSelect";
import { Button, Grid } from "@mui/material";
import { Formik, useFormik } from "formik";

const AddNewInstitute = () => {
  const initial_values = {
    instName: "",
    ownerName: "",
    contact: "",
    payDate: "",
    payType: "",
    payment: "",
  };

  const formik = useFormik(
    { 
        initialValues: initial_values,
        onSubmit: values => {
            console.log(values);
        },
        validate: (values) => {

        }
    }
    );


  return (
    <>
      <Formik initialValues={initial_values}>{(formik) => {}}</Formik>
      <FormElement
        title={"Add New Institute"}
        sub={"Plese fill out all of the required fields."}
        top={"10vh"}
      >
        <form onSubmit={formik.handleSubmit}>
          <NewTextField
            label={"Name of the institute"}
            onChange={formik.handleChange}
            value={formik.values.instName}
            name={"instName"}
            id={"inst"}
          />
          <NewTextField
            label={"Name of the owner"}
            onChange={formik.handleChange}
            value={formik.values.ownerName}
            name={"ownerName"}
            id={"owner"}
          />
          <NewTextField
            label={"Contact No."}
            id={"contact"}
            onChange={formik.handleChange}
            value={formik.values.contact}
            name={"contact"}
            type={"number"}
          />
          <NewTextField
            label={"Payment date"}
            onChange={formik.handleChange}
            value={formik.values.payDate}
            name={"payDate"}
            id={"pay-date"}
          />
          <NewSelect
            none
            label={"Payment type"}
            onChange={formik.handleChange}
            value={formik.values.payType}
            name={"payType"}
            id={"pay-type"}
          >
            <option value={"onetime"}>One Time Payment</option>
            <option value={"monthly"}>Monthly Payment</option>
            <option value={"yearly"}>Yearly Payment</option>
            <option value={"trial"}>Trial Period</option>
          </NewSelect>
          <NewTextField
            label={"Payment"}
            onChange={formik.handleChange}
            value={formik.values.payment}
            name={"payment"}
            type={"number"}
            id={"payment"}
          />
          <Grid container fullWidth spacing={1} marginY={2}>
            <Grid item xs={12} md={6}>
              <Button variant="outlined" fullWidth>
                Clear
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button type="submit" variant="contained" fullWidth>
                Sumbit
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormElement>
    </>
  );
};

export default AddNewInstitute;
