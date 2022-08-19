import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function SelectFilters() {
  const {
    activateFilter,
    filterByNumericValues,
    setFilterByNumericValues,
    // filterByColumn,
    // setFilterByColumn,
    // filterByComparison,
    // setFilterByComparison,
    // filterByValue,
    // setFilterByValue,
  } = useContext(AppContext);

  const handleFilterChange = ({ target }) => {
    setFilterByNumericValues((prevState) => [...prevState, {
      [target.id]: target.value,
    }]);
    console.log(filterByNumericValues);
    // setFilterByNumericValues()
    // if (target.id === 'column-filter') {
    //   setFilterByColumn({ column: target.value });
    //   // console.log(filterByColumn);
    // }
    // if (target.id === 'comparison-filter') {
    //   setFilterByComparison({ comparison: target.value });
    //   // console.log(filterByComparison);
    // }
    // if (target.id === 'value-filter') {
    //   setFilterByValue({ value: target.value });
    //   // console.log(filterByValue);
    // }
  };

  return (
    <form>
      <label htmlFor="column-filter">
        Column Filter:
        <select
          id="column"
          data-testid="column-filter"
          value={ filterByNumericValues.column }
          onChange={ handleFilterChange }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Comparison Filter:
        <select
          id="comparison"
          data-testid="comparison-filter"
          onChange={ handleFilterChange }
        >
          <option
            value="maior que"
          >
            maior que
          </option>
          <option
            value="menor que"
          >
            menor que
          </option>
          <option
            value="igual a"
          >
            igual a
          </option>
        </select>
      </label>
      <input
        type="number"
        id="value"
        data-testid="value-filter"
        defaultValue="0"
        onChange={ handleFilterChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ activateFilter }
      >
        Filtrar
      </button>
    </form>
  );
}

export default SelectFilters;
