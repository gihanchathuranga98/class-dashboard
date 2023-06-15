import React, { useEffect, useMemo, useState } from "react";
import FormElement from "../../common/Elements/FormElement/FormElement";
import NewTextField from "../../common/Elements/TextFields/NewTextField";
import NewDatePicker from "../../common/Elements/NewDatePicker/NewDatePicker";
import NewSelect from "../../common/Elements/Select/NewSelect";
import { Button, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { checkToken } from "../../common/Functions/checkUserValidity";
import { useSnackbar } from "notistack";

const AddNewInstitute = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  // const _checkToken = (token) => {
  //     return checkToken(token)
  // }

  //#checking token validation
  useEffect(() => {
    try {
      const userData = localStorage.getItem("userData");
      if (userData) {
        const token = JSON.parse(userData).token;
        checkToken(token)
          .then((data) => {
            console.log("data has came", data);
            if (!data) {
              localStorage.removeItem("userData");
              navigate("/");
            }
          })
          .catch((error) => {
            localStorage.removeItem("userData");
            navigate("/");
          });
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("error in useEffect | AddNewInstitute", error);
      localStorage.removeItem("userData");
      navigate("/");
    }
  }, []);

  const initialValues = {
    instName: "",
    ownerName: "",
    contact: "",
    payDate: null,
    payType: "",
    payment: "",
  };

  const Error_Types = {
    REQUIRED: "This field is required",
    EMAIL: "Not a valid email",
    SELECT: "Please select a value",
  };

  const validationSchema = Yup.object({
    instName: Yup.string().required(Error_Types.REQUIRED),
    ownerName: Yup.string().required(Error_Types.REQUIRED),
    contact: Yup.number().required(Error_Types.REQUIRED),
    payDate: Yup.string().required(Error_Types.REQUIRED),
    payType: Yup.string().required(Error_Types.SELECT),
    payment: Yup.number().required(Error_Types.REQUIRED),
  });

  const onSubmit = (values) => {
    setLoading(true);
    try {
      if (formik.isValid) {
        console.log("onSubmit", values);
        axios
          .post("/owner/createinstitute", {
            instName: values.instName,
            ownerName: values.ownerName,
            contact: values.contact,
            payDate: values.payDate,
            payType: values.payType,
            payment: values.payment
          })
          .then((data) => {
            console.log(data);
            formik.handleReset();
            enqueueSnackbar("New Institute Created...", {
              variant: "success",
              anchorOrigin: { horizontal: "right", vertical: "top" },
            });
            setLoading(false);
          })
          .catch((err) => {
            enqueueSnackbar("Institute creation is faild..", {
                variant: "error",
                anchorOrigin: { horizontal: "right", vertical: "top" },
              });
          });
          setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
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
            onBlur={formik.handleBlur}
            helper={formik.touched.instName && formik.errors.instName}
            err={
              formik.touched.instName && formik.errors.instName ? true : false
            }
          />
          <NewTextField
            label={"Name of the owner"}
            onChange={formik.handleChange}
            value={formik.values.ownerName}
            name={"ownerName"}
            id={"owner"}
            onBlur={formik.handleBlur}
            helper={formik.touched.ownerName && formik.errors.ownerName}
            err={
              formik.touched.ownerName && formik.errors.ownerName ? true : false
            }
          />
          <NewTextField
            label={"Contact No."}
            id={"contact"}
            onChange={formik.handleChange}
            value={formik.values.contact}
            name={"contact"}
            type={"number"}
            onBlur={formik.handleBlur}
            helper={formik.touched.contact && formik.errors.contact}
            err={formik.touched.contact && formik.errors.contact ? true : false}
          />
          <NewDatePicker
            name={"payDate"}
            value={formik.values.payDate}
            onChange={formik.handleChange}
            label={"Payment date"}
            id={"payDate"}
            onBlur={formik.handleBlur}
            helper={formik.touched.payDate && formik.errors.contact}
            err={formik.touched.payDate && formik.errors.contact ? true : false}
          />
          <NewSelect
            none
            label={"Payment type"}
            onChange={formik.handleChange}
            value={formik.values.payType}
            name={"payType"}
            id={"pay-type"}
            onBlur={formik.handleBlur}
            helper={formik.touched.payType && formik.errors.payType}
            err={formik.touched.payType && formik.errors.payType ? true : false}
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
            onBlur={formik.handleBlur}
            helper={formik.touched.payment && formik.errors.payment}
            err={formik.touched.payment && formik.errors.payment ? true : false}
          />
          <Grid container spacing={1} marginY={2}>
            <Grid item xs={12} md={6}>
              <Button variant="outlined" fullWidth>
                Clear
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button type="submit" disabled={loading} variant="contained" fullWidth>
                {loading ? 'Loading...' : 'Submit'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormElement>
    </>
  );
};

export default AddNewInstitute;
