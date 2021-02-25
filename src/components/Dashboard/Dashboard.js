import React, { useContext } from 'react';
import { Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Dropdown from './Dropdown';
import Chart from './Chart';
import { CountryContext } from '../../context/countryContext';
import useGetStatsCasesForCountry from '../../services/DataFetchService';
import { BE_ENDPOINTS } from '../constants';
import useGetStatsDeathsForCountry from '../../services/DataFetchService';
import useGetCountries from '../../services/DataFetchService';

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
  const { currentCountry } = useContext(CountryContext);
  const countries = useGetCountries(BE_ENDPOINTS.COUNTRIES);
  const cases = useGetStatsCasesForCountry(BE_ENDPOINTS.COUNTRY_STATS_CASES + currentCountry.country);
  const deaths = useGetStatsDeathsForCountry(BE_ENDPOINTS.COUNTRY_STATS_DEATHS + currentCountry.country);

  return (
    <>
      <Container fixed maxWidth="lg">
        <Grid container className={classes.root}>
          <Grid item className={classes.item} lg>
            <Typography variant="h2">COVID-19 Statistics App</Typography>
          </Grid>
          <Grid item className={classes.item}>
            <Typography variant="h6">Select country from a list below to see weekly statistics</Typography>
          </Grid>
          <Grid item className={classes.item}>
            <Dropdown countries={countries} />
          </Grid>
          <Grid item className={classes.item}>
            <Chart cases={cases} deaths={deaths} country={currentCountry.country} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
