import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getPlanets from '../services/fetchApi';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [filterByName, setFilterName] = useState({ name: '' });
  const [tableInfo, setTableInfo] = useState([]);
  const [valueFilterNumber, setValueFilterNumber] = useState('');
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [filter, setFilter] = useState(false);

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
    // console.log(filterByName.name.length);
  };

  const context = {
    filterByName,
    setFilterName,
    handleChange,
    tableInfo,
    valueFilterNumber,
    setValueFilterNumber,
    columnFilter,
    setColumnFilter,
    comparisonFilter,
    setComparisonFilter,
    filter,
    setFilter,
  };

  if (filter && comparisonFilter === 'maior que') {
    const filteredInfo = tableInfo
      .filter((element) => parseInt(element[columnFilter], 10)
      > parseInt(valueFilterNumber, 10));
    // console.log(filteredInfo);
    // RESOLVER RENDERIZAÇÃO
  }

  if (filter && comparisonFilter === 'menor que') {
    const filteredInfo = tableInfo
      .filter((element) => parseInt(element[columnFilter], 10)
      < parseInt(valueFilterNumber, 10));
    // console.log(filteredInfo);
    // RESOLVER RENDERIZAÇÃO
  }

  if (filter && comparisonFilter === 'igual a') {
    const filteredInfo = tableInfo
      .filter((element) => parseInt(element[columnFilter], 10)
      === parseInt(valueFilterNumber, 10));
    // console.log(filteredInfo);
    // RESOLVER RENDERIZAÇÃO
  }

  if (filterByName.name.length > 0) {
    const filteredTableContent = tableInfo.filter((element) => element
      .name.toLowerCase().includes(filterByName.name.toLowerCase()));
    // setTableInfo(filteredTableContent);
    // console.log(filterByName);
    console.log(filteredTableContent);
    // RESOLVER RENDERIZAÇÃO
  }

  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

export default AppProvider;
