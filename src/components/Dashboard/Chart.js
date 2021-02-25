import React, { useContext } from 'react';
import { CountryContext } from '../../context/countryContext';
import useGetStatsDeathsForCountry from '../../services/DataFetchService';
import useGetStatsCasesForCountry from '../../services/DataFetchService';
import { BE_ENDPOINTS } from '../constants';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Line, defaults } from 'react-chartjs-2';

defaults.global.legend.position = 'bottom';

function Chart() {
  const { currentCountry } = useContext(CountryContext);
  const cases = useGetStatsCasesForCountry(BE_ENDPOINTS.COUNTRY_STATS_CASES + currentCountry.country);
  const deaths = useGetStatsDeathsForCountry(BE_ENDPOINTS.COUNTRY_STATS_DEATHS + currentCountry.country);

  const content = () => {
    if (cases.error || deaths.error !== null) {
      return (
        <Container align="center" maxWidth="md">
          <Typography variant="h5" color="error">
            {cases.error || deaths.error}
          </Typography>
        </Container>
      );
    } else {
      return (
        <div>
          <Line
            data={{
              labels: cases.data.map((item) => item.year_week),
              datasets: [
                {
                  label: 'Weekly cases',
                  data: cases.data.map((item) => item.weekly_count),
                  backgroundColor: 'rgba(255, 159, 64, 0.6)',
                  borderWidth: 1,
                },
                {
                  label: 'Weekly deaths',
                  data: deaths.data.map((item) => item.weekly_count),
                  backgroundColor: 'rgba(153, 102, 255, 1)',
                  borderWidth: 1,
                },
              ],
            }}
            height={500}
            width={600}
            options={{
              title: {
                display: true,
                text: 'Weekly statistics for ' + currentCountry.country,
                fontSize: 20,
                fontFamily: 'Roboto',
              },
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
              legend: {
                labels: {
                  fontSize: 20,
                  fontFamily: 'Roboto',
                },
              },
            }}
          />
        </div>
      );
    }
  };

  return cases.isLoading || deaths.isLoading ? <LinearProgress /> : content();
}

export default Chart;
