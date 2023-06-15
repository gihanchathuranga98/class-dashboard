import React, { useEffect, useState } from "react";
import FormElement from "../../common/Elements/FormElement/FormElement";
import NewTextField from "../../common/Elements/TextFields/NewTextField";
import NewSelect from "../../common/Elements/Select/NewSelect";
import { Alert, Button, CircularProgress, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { checkToken } from "../../common/Functions/checkUserValidity";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { enqueueSnackbar } from "notistack";
import checkUserDuplications from "../../common/Functions/checkDuplications";

const AddNewSuperadmin = () => {
  const navigate = useNavigate();
  const [institutes, setInstitutes] = useState([]);
  const [loading, setLoading] = useState(true);

  // check token
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
  }, [navigate]);

  setInterval(() => {
    try {
        console.log('checking token');
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
  }, 1000*60*60*2);

  const getInstitutes = async () => {
    let userData = localStorage.getItem("userData");
    if (userData) {
      let token = JSON.parse(userData).token;
      await axios
        .get("/institute/getallactive", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((data) => {
          console.log("institutes", data.data);
          setInstitutes(data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log("error in institutes", error);
        });
    }
  };

  useEffect(() => {
    getInstitutes();
  }, []);

  const alert = (
    <Alert severity="info" action={<CircularProgress size={30} color="info" />}>
      Form is loading. Please wait..!
    </Alert>
  );
  // yup validation for formik
  const validationSchema = Yup.object({
    instId: Yup.string().required("Please select an institute"),
    superAdminName: Yup.string().required("This field is required"),
    contact: Yup.string()
      .length(10, "Not a valid number")
      .required("This field is required"),
    email: Yup.string()
      .email("Not an email")
      .required("This field is required"),
    pwd: Yup.string().required("This field is required"),
    cnfirmPwd: Yup.string().oneOf([Yup.ref('pwd'), null], 'Password does not match').required("This field is required"),
  });

  const initialValues = {
    instId: "",
    superAdminName: "",
    contact: "",
    email: "",
    pwd: "",
    cnfirmPwd: "",
  };

//    ------------------------------------------- working area -----------------

  const createNewSuperadmin = async (event) => {
   try {
    await axios.post('/owner/createsuperadmin', {
        instId: event.instId,
        name: event.superAdminName,
        pwd: event.pwd,
        cnfirmPwd: event.cnfirmPwd,
        contact: event.contact,
        email: event.email
    })
    .then(data => {
        console.log('data | new super admin created -', data);
        setLoading(false);
        formik.handleReset();
        enqueueSnackbar("New Super Admin Created...", {
            variant: "success",
            anchorOrigin: { horizontal: "right", vertical: "top" },
          });
    })
    .catch(error => {
        console.log('error | createSuperAdmin', error);
        setLoading(false);
    })
   } catch (error) {
    console.error('error in createNewSuperadmin()', error);
   }
  }


  const onSubmit = async (event) => {
    try {
        await checkUserDuplications({email: event.email})
        .then(async data => {
            if(data){
                console.log('user is already available');
            }else{
                console.log('came to user does not exists');
                createNewSuperadmin(event);
            }
        })
        .catch(error => {
            console.log('error in fucking user availability', error);
        })
        
    } catch (error) {
        console.error('error in onSubmit', error);
    }

// -----------------------------------------------------------------------------

    setLoading(false)
    console.log('onSubmit event', event);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <FormElement
          title={"Create New Super Admin"}
          sub={"Please fill out all of the required fields."}
          top={"5vh"}
        >
          {loading ? alert : null}
          <NewSelect
            value={formik.values.instId}
            onChange={formik.handleChange}
            err={formik.errors.instId && formik.touched.instId ? true : false}
            helper={formik.touched.instId && formik.errors.instId}
            onBlur={formik.handleBlur}
            name={"instId"}
            label={"Select Institute"}
            none
          >
            {institutes.map((inst) => {
              return (
                <option key={inst._id} value={inst._id}>
                  {inst.instName}
                </option>
              );
            })}
          </NewSelect>
          <NewTextField
            value={formik.values.superAdminName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            err={
              formik.touched.superAdminName && formik.errors.superAdminName
                ? true
                : false
            }
            helper={
              formik.touched.superAdminName && formik.errors.superAdminName
            }
            label={"Name of super admin"}
            name={"superAdminName"}
          />
          <NewTextField
            type={"text"}
            label={"Contact No."}
            name={"contact"}
            value={formik.values.contact}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            err={formik.touched.contact && formik.errors.contact ? true : false}
            helper={formik.touched.contact && formik.errors.contact}
          />
          <NewTextField
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            err={formik.touched.email && formik.errors.email ? true : false}
            helper={formik.touched.email && formik.errors.email}
            type={"email"}
            label={"Email"}
            name={"email"}
          />
          <NewTextField
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pwd}
            err={(formik.touched.pwd && formik.errors.pwd) || (formik.touched.cnfirmPwd && formik.errors.cnfirmPwd ? true : false)}
            helper={formik.touched.pwd && formik.errors.pwd}
            type={"password"}
            label={"Password"}
            name={"pwd"}
          />
          <NewTextField
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cnfirmPwd}
            err={formik.touched.cnfirmPwd && formik.errors.cnfirmPwd ? true : false}
            helper={formik.touched.cnfirmPwd && formik.errors.cnfirmPwd}
            type={"password"}
            label={"Confirm Password"}
            name={"cnfirmPwd"}
          />
          <Grid container spacing={1} marginY={2}>
            <Grid item xs={12} md={6}>
              <Button fullWidth variant="outlined">
                Clear
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button fullWidth type="submit" disabled={loading} variant="contained">
                {loading ? "LOADING..." : "SUBMIT"}
              </Button>
            </Grid>
          </Grid>
        </FormElement>
      </form>
    </>
  );
};

export default AddNewSuperadmin;
