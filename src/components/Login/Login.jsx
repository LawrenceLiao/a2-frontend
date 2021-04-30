import React from 'react';
import {
    Grid,
    Paper,
    Typography,
} from '@material-ui/core';
import LoginForm from './LoginForm/LoginForm';
import './Login.scss';

const Login = () => ( 
    
    <header className="login-header">
    <Grid container item xs={12} sm={6} alignItems="center" direction="column" className="grid">
      <Paper elevation={10} variant="outlined" className="paper">
        <Grid container justify="center" alignItems="center" direction="column">
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
        </Grid>
        <LoginForm />
      </Paper>
    </Grid>
  </header>
    
);
export default Login;