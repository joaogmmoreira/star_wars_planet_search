import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getPlanets from '../services/fetchApi';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [filterByName, setFilterName] = useState({ name: '' });
  const [tableInfo, setTableInfo] = useState([]);
  const [tableInfoCopy, setTableInfoCopy] = useState([]);
  const [filterByNumericValues,
    setFilterByNumericValues] = useState([]);
  const [filterByColumn,
    setFilterByColumn] = useState('population');
  const [
    filterByComparison,
    setFilterByComparison] = useState('maior que');
  const [filterByValue,
    setFilterByValue] = useState('0');

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
    setTableInfo(filteredTableContent);
  };

  const saveFilterToState = () => {
    if (filterByNumericValues.length === 0) {
      setFilterByNumericValues([{
        column: filterByColumn,
        comparison: filterByComparison,
        value: filterByValue }]);
    }
    if (filterByNumericValues.length > 0) {
      setFilterByNumericValues([...filterByNumericValues, {
        column: filterByColumn,
        comparison: filterByComparison,
        value: filterByValue }]);
    }
  };

  const activateFilter = () => {
    if (filterByComparison === 'maior que') {
      const filteredInfo = tableInfo
        .filter((element2) => Number(element2[filterByColumn]) > Number(filterByValue));
      setTableInfo(filteredInfo);
      console.log('maior');
    }
    if (filterByComparison === 'menor que') {
      const filteredInfo = tableInfo
        .filter((element2) => Number(element2[filterByColumn]) < Number(filterByValue));
      setTableInfo(filteredInfo);
      console.log('menor');
    }
    if (filterByComparison === 'igual a') {
      const filteredInfo = tableInfo
        .filter((element2) => Number(element2[filterByColumn]) === Number(filterByValue));
      setTableInfo(filteredInfo);
      console.log('igual');
    }
    saveFilterToState();
  };

  const context = {
    filterByName,
    setFilterName,
    handleChange,
    tableInfo,
    activateFilter,
    filterByNumericValues,
    setFilterByNumericValues,
    filterByColumn,
    setFilterByColumn,
    filterByComparison,
    setFilterByComparison,
    filterByValue,
    setFilterByValue,
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
