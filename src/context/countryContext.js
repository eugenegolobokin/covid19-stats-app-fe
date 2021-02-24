import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CountryContext = React.createContext({});

export const CountryProvider = ({ children }) => {
  CountryProvider.propTypes = {
    children: PropTypes.func,
  };

  const unidentifiedCountry = {
    country: '',
  };

  const initialSession = () => {
    return unidentifiedCountry;
  };

  const [currentCountry, setCurrentCountry] = useState(initialSession);

  const setCountry = (country) => {
    setCurrentCountry({
      ...currentCountry,
      country: country,
    });
  };

  return <CountryContext.Provider value={{ currentCountry, setCountry }}>{children}</CountryContext.Provider>;
};
