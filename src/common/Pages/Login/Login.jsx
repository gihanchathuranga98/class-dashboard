import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormElement from "../../Elements/FormElement/FormElement";
import NewTextField from "../../Elements/TextFields/NewTextField";
import NewCheckbox from "../../Elements/Checkbox/NewCheckbox";
import Joi from "joi";
import axios from "axios";

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

  useEffect(() => {
    const { error, value } = input_schema.validate({ email, password });
    if (error) {
      setValidity(false);
    } else {
      setValidity(true);
    }
  }, [email, password]);

  const handleLogin = async (event) => {
    await axios.post('http://localhost:4000/login', {
      email,
      password
    })
    .then((data) => {
      console.log(data);
    })
    .catch(err => {
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
