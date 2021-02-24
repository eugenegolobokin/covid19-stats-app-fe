import React, { useContext } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { CountryContext } from '../../context/countryContext';
import useGetCountries from '../../services/DataFetchService';
import { BE_ENDPOINTS } from '../constants';
import LinearProgress from '@material-ui/core/LinearProgress';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

function Dropdown() {
  const { data, error, isLoading } = useGetCountries(BE_ENDPOINTS.COUNTRIES);
  const { setCountry } = useContext(CountryContext);

  const content = () => {
    if (error !== null) {
      return (
        <Container align="center" maxWidth="md">
          <Typography variant="h5" color="error">
            {error}
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
          options={data}
          getOptionLabel={(option) => option.country}
          fullWidth
          renderInput={(params) => (
            <TextField {...params} label="Select country or type to search" variant="outlined" />
          )}
        />
      );
    }
  };

  return isLoading ? <LinearProgress /> : content();
}

export default Dropdown;
