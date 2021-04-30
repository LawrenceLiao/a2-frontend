import React, { useState } from 'react';
import {
    Button,
    Grid,
    InputAdornment,
    TextField,
    Typography,
} from '@material-ui/core';
import { AccountCircle, LockRounded } from '@material-ui/icons';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import {
    Link,
    useHistory,
} from 'react-router-dom';
import './LoginForm.scss';
import * as apiUtils from '../../../utils/apiUtils';
import WarningMessage from '../WarningMessage/WarningMessage';

const LoginForm = () => {
    const history = useHistory();
    const [warning, setWarning] = useState({
      shown: false,
      message: '',
    });
  
    const initialValues = {
      email: '',
      password: '',
    };
   
    const onSubmit = async ({ email, password }) => {
      setWarning({
        shown: false,
        message: '',
      });
      try {
        const loginResponse = await apiUtils.login({ email, password });

  
        if (loginResponse.status === 200) {
          localStorage.setItem('email', email);
          localStorage.setItem('username', loginResponse.data.username);
          localStorage.setItem('login', 'true');
          history.push('/main');
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
            message: "Email or Password is invalid",
          });
        }
      }
    };
    return (
      <div className="login_form">
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
                Sign in
              </Button>
              <div style={{ height: 10 }} />
              <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item>
                  <Typography>
                    New User? &nbsp;
                    <Link id="signUpLink" className="link" to="/signup">
                      Sign Up
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    );
  };
  
  export default LoginForm;