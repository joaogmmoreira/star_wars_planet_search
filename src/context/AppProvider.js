import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getPlanets from '../services/fetchApi';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [filterByName, setFilterName] = useState({ name: '' });
  const [tableInfo, setTableInfo] = useState([]);

  const tableHeaderContent = async () => {
    const content = await getPlanets();
    const tableValues = content.results;
    tableValues.forEach((element) => delete element.residents);
    setTableInfo(tableValues);
  };

  useEffect(() => {
    tableHeaderContent();
  }, []);

  const handleChange = ({ target: { value } }) => {
    setFilterName({ name: value });
  };

  const context = {
    filterByName,
    setFilterName,
    handleChange,
    tableInfo,
  };

  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppProvider;
