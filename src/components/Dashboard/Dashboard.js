import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Dropdown from './Dropdown';
import Chart from './Chart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  item: {
    textAlign: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

function Dashboard() {
  const classes = useStyles();

  return (
    <>
      <Container fixed maxWidth="lg">
        <Grid container className={classes.root}>
          <Grid item className={classes.item}>
            <Typography variant="h1">COVID-19 Statistics App</Typography>
          </Grid>
          <Grid item className={classes.item}>
            <Typography variant="h6">Select country from a list below to see weekly stats</Typography>
          </Grid>
          <Grid item className={classes.item}>
            <Dropdown />
          </Grid>
          <Grid item className={classes.item}>
            <Chart />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
