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
    value: '0',
  }]);
  // const [filterByColumn,
  //   setFilterByColumn] = useState({ column: 'population' });
  // const [
  //   filterByComparison,
  //   setFilterByComparison] = useState({ comparison: 'maior que' });
  // const [filterByValue,
  //   setFilterByValue] = useState({ value: '0' });
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
    // console.log(filterByColumn, filterByComparison, filterByValue);
    filterByNumericValues.forEach((element) => {
      const { column, comparison, value } = element;
      if (comparison === 'maior que') {
        const filteredInfo = tableInfoCopy
          .filter((element2) => Number(element2[column]) > Number(value));
        setTableInfo(filteredInfo);
      }
      if (comparison === 'menor que') {
        const filteredInfo = tableInfoCopy
          .filter((element2) => Number(element2[column]) < Number(value));
        setTableInfo(filteredInfo);
      }
      if (comparison === 'igual a') {
        const filteredInfo = tableInfoCopy
          .filter((element2) => element2[column] !== 'unknown'
          && Number(element2[column]) === number(value));
        setTableInfo(filteredInfo);
      }
    });
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
    // filterByColumn,
    // setFilterByColumn,
    // filterByComparison,
    // setFilterByComparison,
    // filterByValue,
    // setFilterByValue,
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
