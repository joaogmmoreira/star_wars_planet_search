import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getPlanets from '../services/fetchApi';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [filterByName, setFilterName] = useState({ name: '' });
  const [tableInfo, setTableInfo] = useState([]);
  const [tableInfoCopy, setTableInfoCopy] = useState([]);
  const [filterByNumericValues,
    setFilterByNumericValues] = useState([{
    column: 'population',
    comparison: 'maior que',
    value: '0' }]);
  const [activeFilters, setActiveFilters] = useState([]);

  const tableHeaderContent = async () => {
    const content = await getPlanets();
    const tableValues = content.results;
    tableValues.forEach((element) => delete element.residents);
    setTableInfo(tableValues);
    setTableInfoCopy(tableValues);
  };

  useEffect(() => {
    tableHeaderContent();
  }, []);

  const handleChange = ({ target: { value } }) => {
    setFilterName({ name: value });
    const filteredTableContent = tableInfoCopy.filter((element) => element
      .name.toLowerCase().includes(value.toLowerCase()));
    console.log(filteredTableContent);
    setTableInfo(filteredTableContent);
  };

  const activateFilter = () => {
    const { column, comparison, value } = filterByNumericValues;
    // const filters = { column, comparison, value };
    // setActiveFilters([...activeFilters, filters]);
    // console.log(tableInfoCopy);
    console.log(filterByNumericValues);
    if (comparison === 'maior que') {
      const filteredInfo = tableInfoCopy
        .filter((element) => parseInt(element[column], 10)
        > parseInt(value, 10));
      setTableInfo(filteredInfo);
    }

    if (comparison === 'menor que') {
      const filteredInfo = tableInfoCopy
        .filter((element) => parseInt(element[column], 10)
        < parseInt(value, 10));
      setTableInfo(filteredInfo);
    }

    if (comparison === 'igual a') {
      const filteredInfo = tableInfoCopy
        .filter((element) => parseInt(element[column], 10)
        === parseInt(value, 10));
      setTableInfo(filteredInfo);
    }
  };

  const context = {
    filterByName,
    setFilterName,
    handleChange,
    tableInfo,
    // valueFilterNumber,
    // setValueFilterNumber,
    // columnFilter,
    // setColumnFilter,
    // comparisonFilter,
    // setComparisonFilter,
    activateFilter,
    // setFilter,
    activeFilters,
    setActiveFilters,
    // refreshFilter,
    // setRefreshFilter,
    filterByNumericValues,
    setFilterByNumericValues,
  };

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
