import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getPlanets from '../services/fetchApi';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [filterByName, setFilterName] = useState({ name: '' });
  const [tableInfo, setTableInfo] = useState([]);
  const [tableInfoCopy, setTableInfoCopy] = useState([]);
  const [filterByNumericValues,
    setFilterByNumericValues] = useState([{}]);
  const [filterByColumn,
    setFilterByColumn] = useState('population');
  const [
    filterByComparison,
    setFilterByComparison] = useState('maior que');
  const [filterByValue,
    setFilterByValue] = useState('0');
  // const [activeFilters, setActiveFilters] = useState([]);
  // const [filterFlag, setFilterFlag] = useState(false);

  const tableHeaderContent = async () => {
    const content = await getPlanets();
    const tableValues = content.results;
    tableValues.forEach((element) => delete element.residents);
    setTableInfo(tableValues);
    setTableInfoCopy(tableValues);
  };

  // const filterSet = () => {
  //   setFilterByNumericValues([...filterByNumericValues,
  //     { column: filterByColumn.column,
  //       comparison: filterByComparison.comparison,
  //       value: filterByValue.value },
  //   ]);
  // };

  useEffect(() => {
    tableHeaderContent();
  }, []);

  // const renderFilters = () => (
  //   filterByNumericValues.map((element, index) => (
  //     <div key={ index + element.column + element.comparison + element.value }>
  //       <button
  //         type="button"
  //         onClick={ () => {} }
  //       >
  //         {`${element.column} ${element.comparison} ${element.value}`}
  //       </button>
  //     </div>
  //   ))
  // );

  const handleChange = ({ target: { value } }) => {
    setFilterName({ name: value });
    const filteredTableContent = tableInfoCopy.filter((element) => element
      .name.toLowerCase().includes(value.toLowerCase()));
    setTableInfo(filteredTableContent);
  };

  const activateFilter = () => {
    setFilterByNumericValues([...filterByNumericValues, {
      column: filterByColumn,
      comparison: filterByComparison,
      value: filterByValue,
    }]);
    // filterByNumericValues.forEach((element) => {
    // const { column, comparison, value } = element;
    // console.log(filterByNumericValues);
    if (filterByComparison === 'maior que') {
      const filteredInfo = tableInfo
        .filter((element2) => Number(element2[filterByColumn]) > Number(filterByValue));
      setTableInfo(filteredInfo);
    }
    if (filterByComparison === 'menor que') {
      const filteredInfo = tableInfo
        .filter((element2) => Number(element2[filterByColumn]) < Number(filterByValue));
      setTableInfo(filteredInfo);
    }
    if (filterByComparison === 'igual a') {
      const filteredInfo = tableInfo
        .filter((element2) => Number(element2[filterByColumn]) === Number(filterByValue));
      setTableInfo(filteredInfo);
    }
    // });
  };

  const context = {
    filterByName,
    setFilterName,
    handleChange,
    tableInfo,
    activateFilter,
    // activeFilters,
    // setActiveFilters,
    filterByNumericValues,
    setFilterByNumericValues,
    filterByColumn,
    setFilterByColumn,
    filterByComparison,
    setFilterByComparison,
    filterByValue,
    setFilterByValue,
    // renderFilters,
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
