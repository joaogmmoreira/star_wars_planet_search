import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function SelectFilters() {
  const { setValueFilterNumber,
    setColumnFilter,
    setComparisonFilter,
    setFilter,
  } = useContext(AppContext);

  const handleFilterNumberChange = ({ target }) => {
    setValueFilterNumber(target.value);
    // console.log(valueFilterNumber);
  };

  const handleColumnFilterChange = ({ target }) => {
    setColumnFilter(target.value);
    // console.log(columnFilter);
  };

  const handleComparisonFilterChange = ({ target }) => {
    setComparisonFilter(target.value);
    // console.log(comparisonFilter);
  };

  const activateFilter = () => {
    setFilter(true);
    // console.log(filter);
  };

  return (
    <form>
      <label htmlFor="column-filter">
        Column Filter:
        <select
          id="column-filter"
          data-testid="column-filter"
          onChange={ handleColumnFilterChange }
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
          id="comparison-filter"
          data-testid="comparison-filter"
          onChange={ handleComparisonFilterChange }
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
        data-testid="value-filter"
        defaultValue="0"
        onChange={ handleFilterNumberChange }
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
