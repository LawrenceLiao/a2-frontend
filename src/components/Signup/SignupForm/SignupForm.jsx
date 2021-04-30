import React, { useState } from 'react';
import {
    Button,
    InputAdornment,
    TextField,
} from '@material-ui/core';
import { AccountCircle, LockRounded } from '@material-ui/icons';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import {
    useHistory,
} from 'react-router-dom';
import './SignupForm.scss';
import * as apiUtils from '../../../utils/apiUtils';
import WarningMessage from '../WarningMessage/WarningMessage';


const SignupForm = () => {
    const history = useHistory();
    const [warning, setWarning] = useState({
      shown: false,
      message: '',
    });
  
    const initialValues = {
      email: '',
      username: '',
      password: '',
    };
   
    const onSubmit = async ({ email, username, password }) => {
      setWarning({
        shown: false,
        message: '',
      });
      try {
        const signupResponse = await apiUtils.signup({ email, username, password });

  
        if (signupResponse.status === 200) {
          history.push('/login');
        }
        
      } catch (error) {
        if (error.response.status >= 500) {
          setWarning({
            shown: true,
            message: "INTERNAL_SERVER_ERROR",
          });
        }
        if (error.response.status >= 400 && error.response.status < 500) {
          setWarning({
            shown: true,
            message: "The email already exists!",
          });
        }
      }
    };
    return (
      <div className="signup_form">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                {warning.shown ? <WarningMessage content={warning.message} /> : null}
              </div>
              <div>
              </div>
              <Field
                as={TextField}
                label="Email"
                name="email"
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                autoFocus
                autoComplete="email"
                helperText={(
                  <ErrorMessage name="email">
                    { (msg) => <span className="errorMessage">{msg}</span>}
                  </ErrorMessage>
                )}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <Field
                as={TextField}
                label="Username"
                name="username"
                variant="outlined"
                margin="normal"
                fullWidth
                id="username"
                autoFocus
                autoComplete="username"
                helperText={(
                  <ErrorMessage name="username">
                    { (msg) => <span className="errorMessage">{msg}</span>}
                  </ErrorMessage>
                )}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <Field
                data-testid="passwordInput"
                as={TextField}
                label="Password"
                variant="outlined"
                margin="normal"
                fullWidth
                id="password"
                type="password"
                name="password"
                autoComplete="current-password"
                helperText={(
                  <ErrorMessage name="password">
                    { (msg) => <span className="errorMessage">{msg}</span>}
                  </ErrorMessage>
                )}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockRounded />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={isSubmitting}
              >
                Register
              </Button>
              
            </Form>
          )}
        </Formik>
      </div>
    );
  };
  

export default SignupForm;
