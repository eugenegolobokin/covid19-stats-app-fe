import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

function Dashboard() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md">
        <Grid container className={classes.root}>
          <Grid item>
            <Typography variant="h3">Hello, I`m a Dashboard!</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
