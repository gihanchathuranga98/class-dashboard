import { Box, Button } from "@mui/material";
import React, { useContext, useEffect, useReducer } from "react";
import FormElement from "../../Elements/FormElement/FormElement";
import NewTextField from "../../Elements/TextFields/NewTextField";
import NewCheckbox from "../../Elements/Checkbox/NewCheckbox";
import Joi from "joi";
import axios from "axios";
import { useSnackbar } from "notistack";
import { INITIAL_STATE, actions, loginReducer } from "../../../reducers/loginReducer";
import { AuthContext } from "../../Contexts/Auth-Context";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const auth = useContext(AuthContext);

  const input_schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().min(7).required(),
  });

  const [state, dispatch] = useReducer(loginReducer, INITIAL_STATE);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();


  useEffect(() => {
    const { error } = input_schema.validate({ email: state.email, password: state.password });
    if (error) {
      dispatch({type: actions.SET_VALIDITY, payload: false});
    } else {
      dispatch({type: actions.SET_VALIDITY, payload: true});
    }
  }, [state.email, state.password, input_schema]);



  const handleLogin = async () => {
    try {
      dispatch({type: actions.SET_LOADER, payload: true});
      await axios.post('/login', {
        email: state.email,
        password: state.password
      })
      .then((data) => {
        auth.login(data.data);
        enqueueSnackbar('User logged in successfully', {variant: 'success', anchorOrigin: {horizontal: "right", vertical: 'top'}});
        navigate('/ownerdashboard');
  
      })
      .catch(err => {
        enqueueSnackbar('Please re-check your credentials', {variant: 'error', anchorOrigin: {horizontal: "right", vertical: 'top'}});
        dispatch({type: actions.SET_LOADER, payload: false});
        console.log(err);
      })
      
    } catch (error) {
      console.error(error);
    }
  }

  const checkToken = async (token) => {
    try {
      var result;
      console.log('came to checkToken');
      axios.defaults.headers.post['Authorization'] = `Bearer ${token}`;
      await axios.post('/checktoken', {headers: {"Acess-Control-Allow-Origin": "*", "Authorization": "Bearer " + token, "Accept": "application/json"}})
      .then((data) => {
        console.log("response data");
        console.log(data);
        if(data.data.isValid){
          console.log("is data valid - " + data.data.isValid);
          result = true;
        }else{
          result = false;
        }
      })
      .catch(error => {
        console.error(error);
        result = false;
      })
      console.log('before return - ' + result);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    try {

      const fetchData = async (token) => {
        console.log('token ' + token);
        const result = checkToken(token);
        result.then(
          data => {
            console.log('came before data');
            console.log(data);
            if(data){
              console.log('came to data ' + data);
              const userData = JSON.parse(localStorage.getItem('userData'));
              auth.login(userData);
              navigate('/ownerdashboard');
            }else{
              navigate('/')
            }
          }
        )
        .catch(err => {
          console.error(err);
        })
      }

      let userData;
      if(localStorage.getItem('userData')){
        userData = JSON.parse(localStorage.getItem('userData'));
        const result = fetchData(userData.token)
        .catch(error => {
          console.log(error);

          console.log('result ' + result);
        })
      }

    } catch (error) {
      console.error(error);
    }
  }, [auth, navigate]);



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
