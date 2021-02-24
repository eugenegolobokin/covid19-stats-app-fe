import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import { CountryProvider } from './context/countryContext';

function App() {
  return (
    <CountryProvider>
      <Dashboard />
    </CountryProvider>
  );
}

export default App;
