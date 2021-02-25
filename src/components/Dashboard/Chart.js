import React from 'react';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Line, defaults } from 'react-chartjs-2';
import PropTypes from 'prop-types';

defaults.global.legend.position = 'bottom';

Chart.propTypes = {
  cases: PropTypes.object,
  deaths: PropTypes.object,
  country: PropTypes.string,
};

function Chart(props) {
  const { cases, deaths, country } = props;

  const content = () => {
    if (cases.error || deaths.error !== null) {
      return (
        <Typography variant="h5" color="error">
          {cases.error || deaths.error}
        </Typography>
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
            width={900}
            options={{
              title: {
                display: true,
                text: 'Weekly statistics for ' + country,
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
