import { Box, Button } from "@mui/material";
import React, { useEffect, useReducer } from "react";
import FormElement from "../../Elements/FormElement/FormElement";
import NewTextField from "../../Elements/TextFields/NewTextField";
import NewCheckbox from "../../Elements/Checkbox/NewCheckbox";
import Joi from "joi";
import axios from "axios";
import { useSnackbar } from "notistack";
import { INITIAL_STATE, actions, loginReducer } from "../../../reducers/loginReducer";

const Login = () => {

  const input_schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().min(7).required(),
  });

  const [state, dispatch] = useReducer(loginReducer, INITIAL_STATE);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const { error } = input_schema.validate({ email: state.email, password: state.password });
    if (error) {
      dispatch({type: actions.SET_VALIDITY, payload: false});
    } else {
      dispatch({type: actions.SET_VALIDITY, payload: true});
    }
  }, [state.email, state.password, input_schema]);

  const handleLogin = async () => {
    dispatch({type: actions.SET_LOADER, payload: true});
    await axios.post('/login', {
      email: state.email,
      password: state.password
    })
    .then((data) => {
      enqueueSnackbar('User logged in successfully', {variant: 'success', anchorOrigin: {horizontal: "right", vertical: 'top'}});
      console.log(data);
    })
    .catch(err => {
      enqueueSnackbar('Please re-check your credentials', {variant: 'error', anchorOrigin: {horizontal: "right", vertical: 'top'}});
      dispatch({type: actions.SET_LOADER, payload: false});
      console.log(err);
    })
  }

  return (
    <>
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
            onChange={(e) => {dispatch({type: actions.SET_EMAIL, payload: e.target.value})}}
            value={state.email}
            type={"email"}
          />
          <NewTextField
            label={"Password"}
            type={"password"}
            required
            id={"pwd"}
            name={"pwd"}
            value={state.password}
            onChange={(e) => dispatch({type: actions.SET_PASSWORD, payload: e.target.value})}
            placeholder={"Enter your password"}
          />
          <NewCheckbox
            disabled
            label={"Remember me"}
            sx={{ marginLeft: 1, marginTop: 0 }}
          />
          <Box marginX={1} marginBottom={1}>
            <Button onClick={handleLogin} fullWidth disabled={!state.validity || state.loader} variant="contained">
            {
              state.loader ? "Loading..." : 'Login'
            }
            </Button>
          </Box>
          <Box marginX={1}>
            <Button fullWidth>Forgot password
            
            </Button>
            
          </Box>
        </FormElement>
      </form>
    </>
  );
};

export default Login;
