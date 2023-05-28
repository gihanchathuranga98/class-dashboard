import { Alert, Box, Button, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormElement from "../../Elements/FormElement/FormElement";
import NewTextField from "../../Elements/TextFields/NewTextField";
import NewCheckbox from "../../Elements/Checkbox/NewCheckbox";
import Joi from "joi";
import axios from "axios";
import NewAlert from "../../Elements/NewAlert/NewAlert";
import { useSnackbar } from "notistack";

const Login = () => {

  const input_schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().min(7).required(),
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validity, setValidity] = useState(false);
  const [open, setOpen] = useState(false);
  const [open_info, setOpen_info] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    const { error, value } = input_schema.validate({ email, password });
    if (error) {
      setValidity(false);
    } else {
      setValidity(true);
    }
  }, [email, password]);

  const handleLogin = async (event) => {
    await axios.post('/login', {
      email,
      password
    })
    .then((data) => {
      enqueueSnackbar('User logged in successfully', {variant: 'success', anchorOrigin: {horizontal: "right", vertical: 'top'}});
      console.log(data);
    })
    .catch(err => {
      enqueueSnackbar('Please re-check your credentials', {variant: 'error', anchorOrigin: {horizontal: "right", vertical: 'top'}});
      console.log(err);
    })
  }

  return (
    <>
      {/* <Snackbar  anchorOrigin={{vertical: 'top', horizontal: 'right'}} open={open} autoHideDuration={6000} onClose={() => {setOpen(false)}}>
          <Alert onClose={() => {setOpen(false)}} severity="success" sx={{ width: '100%' , borderStyle: 'solid', borderColor: 'green', borderWidth: 3}}>
            This is a success message!
          </Alert>
      </Snackbar> */}
      <NewAlert type={'error'} open={open} onClose={()=>{setOpen(false)}} message={'Please Re-check Credentials..!'}/>
      <NewAlert type={'info'} open={open_info} onClose={()=>{setOpen_info(false)}} message={'Please Re-check Credentials..!'}/>
      <form>
        <FormElement
          title={"LOGIN"}
          sub={"Please fill all of the required fields."}
          top={"12vh"}
        >
          <NewTextField
            label={"Email"}
            required
            id={"email"}
            name={"email"}
            placeholder={"abc@email.com"}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type={"email"}
          />
          <NewTextField
            label={"Password"}
            type={"password"}
            required
            id={"pwd"}
            name={"pwd"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={"Enter your password"}
          />
          <NewCheckbox
            disabled
            label={"Remember me"}
            sx={{ marginLeft: 1, marginTop: 0 }}
          />
          <Box marginX={1} marginBottom={1}>
            <Button onClick={handleLogin} fullWidth disabled={!validity} variant="contained">
              Login
            </Button>
          </Box>
          <Box marginX={1}>
            <Button fullWidth>Forgot password</Button>
          </Box>
        </FormElement>
      </form>
    </>
  );
};

export default Login;
