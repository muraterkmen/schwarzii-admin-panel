import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Form,
  FormGroup,
  FormText,
  Input,
  CustomInput,
  Button,
  Label,
  EmptyLayout,
  ThemeConsumer,
} from "./../../../components";

import { HeaderAuth } from "../../components/Pages/HeaderAuth";
import { FooterAuth } from "../../components/Pages/FooterAuth";

// Redux stuff
import { connect } from "react-redux";
import { loginUser } from "../../../redux/actions/userActions";
import PropTypes from "prop-types";

const Login = (props) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const { errors } = props.UI;

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      email: emailValue,
      password: passwordValue,
    };

    console.log("props ", props);
    console.log("userData", userData);
    props.loginUser(userData, props.history);
    console.log("errors", errors);
    console.log("errors", errors ? errors.errors : "");
    console.log("errors exact", errors && errors.errors ? errors.errors.general : "");
    
  };

  return (
    <EmptyLayout>
      <EmptyLayout.Section center>
        {/* START Header */}
        <HeaderAuth title="Sign In to Application" />
        {/* END Header */}
        {/* START Form */}
        <Form className="mb-3" onSubmit={(event) => handleSubmit(event)}>
          <FormGroup>
            <Label for="emailAdress">Email Adress</Label>
            <Input
              type="email"
              name="email"
              id="emailAdress"
              placeholder="Enter email..."
              className="bg-white"
              onChange={(event) => {
                setEmailValue(event.target.value);
              }}
            />
            <FormText color="muted">
              We&amp;ll never share your email with anyone else.
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password..."
              className="bg-white"
              onChange={(event) => {
                setPasswordValue(event.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <CustomInput
              type="checkbox"
              id="rememberPassword"
              label="Remember Password"
              inline
            />
          </FormGroup>
          <ThemeConsumer>
            {({ color }) => (
              <Button color={color} block type="submit">
                Sign In
              </Button>
            )}
          </ThemeConsumer>
        </Form>
        {/* END Form */}
        {/* START Bottom Links */}
        <div className="d-flex mb-5">
          <Link to="/pages/forgotpassword" className="text-decoration-none">
            Forgot Password
          </Link>
          <Link to="/pages/register" className="ml-auto text-decoration-none">
            Register
          </Link>
        </div>
        {/* END Bottom Links */}
        {/* START Footer */}
        <FooterAuth />
        {/* END Footer */}
      </EmptyLayout.Section>
    </EmptyLayout>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionsToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapActionsToProps)(Login);
