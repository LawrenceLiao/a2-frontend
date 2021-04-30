import React from 'react';
import {
  Grid,
  Typography,
} from '@material-ui/core';

const UserArea = () => {

    const username = localStorage.getItem('username');

    return (
        <Grid>
            <Typography component="h1" variant="h5">
            {username}
            </Typography>
        </Grid>
    )
}
export default UserArea;