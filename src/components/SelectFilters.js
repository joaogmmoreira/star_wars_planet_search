import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function SelectFilters() {
  const {
    activateFilter,
    filterByNumericValues,
    setFilterByNumericValues,
  } = useContext(AppContext);

  const handleFilterChange = ({ target }) => {
    if (target.id === 'column-filter') {
      setFilterByNumericValues([{ column: target.value,
        comparison,
        value }]);
      console.log(filterByNumericValues);
    }
    if (target.id === 'comparison-filter') {
      setFilterByNumericValues([{ column,
        comparison: target.value,
        value }]);
      console.log(filterByNumericValues);
    }
    if (target.id === 'value-filter') {
      setFilterByNumericValues([{ column,
        comparison,
        value: target.value }]);
      console.log(filterByNumericValues);
    }
  };

  return (
    <form>
      <label htmlFor="column-filter">
        Column Filter:
        <select
          id="column-filter"
          data-testid="column-filter"
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
          id="comparison-filter"
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
        id="value-filter"
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
