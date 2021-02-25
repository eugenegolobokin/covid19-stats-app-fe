import React, { useContext } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { CountryContext } from '../../context/countryContext';
import LinearProgress from '@material-ui/core/LinearProgress';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

Dropdown.propTypes = {
  countries: PropTypes.object,
};

function Dropdown(props) {
  const { countries } = props;
  const { setCountry } = useContext(CountryContext);

  const content = () => {
    if (countries.error !== null) {
      return (
        <Container align="center" maxWidth="md">
          <Typography variant="h5" color="error">
            {countries.error}
          </Typography>
        </Container>
      );
    } else {
      return (
        <Autocomplete
          id="countries"
          onChange={(event, newValue) => {
            newValue !== null ? setCountry(newValue.country) : setCountry('');
          }}
          options={countries.data}
          getOptionLabel={(option) => option.country}
          fullWidth
          renderInput={(params) => (
            <TextField {...params} label="Select country or type to search" variant="outlined" />
          )}
        />
      );
    }
  };

  return countries.isLoading ? <LinearProgress /> : content();
}

export default Dropdown;
