import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SignupForm from './SignupForm/SignupForm';
import './Signup.scss';

const useStyles = makeStyles((theme) => createStyles({
  grid: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(3),
  },
  title: {
    marginTop: theme.spacing(2),
  },
  paper: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(3),
  },
}));


const Signup = () => {
    const classes = useStyles();
    const titleName = 'Sign up';
    return (
      <Container maxWidth="xs">
        <Grid container wrap="nowrap" direction="column" className={classes.grid}>
          <Grid container justify="center" alignItems="center" direction="column">
            <Typography component="h1" variant="h5" color="primary" className={classes.title}>
              {titleName}
            </Typography>
          </Grid>
          <Paper className={classes.paper}>
          <SignupForm />
          </Paper>
        </Grid>
      </Container>
    );
  };

export default Signup;