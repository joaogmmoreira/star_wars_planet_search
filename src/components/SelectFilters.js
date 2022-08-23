import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';

function SelectFilters() {
  const {
    activateFilter,
    setFilterByColumn,
    setFilterByComparison,
    setFilterByValue,
    filterByNumericValues,
  } = useContext(AppContext);

  const [selectOptions, setSelectOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);

  const handleFilterChange = ({ target }) => {
    if (target.id === 'column-filter') {
      setFilterByColumn(target.value);
    }
    if (target.id === 'comparison-filter') {
      setFilterByComparison(target.value);
    }
    if (target.id === 'value-filter') {
      setFilterByValue(target.value);
    }
  };

  const renderOptions = (arr) => arr.map((element) => (
    <option key={ element } value={ element }>{element}</option>
  ));

  const repeatedFilters = () => {
    filterByNumericValues.forEach((element) => {
      setSelectOptions(selectOptions.filter((element2) => element2 !== element.column));
      console.log(element);
    });
  };

  useEffect(() => {
    repeatedFilters();
  }, [filterByNumericValues]);

  return (
    <form>
      <label htmlFor="column-filter">
        Column Filter:
        <select
          id="column-filter"
          data-testid="column-filter"
          onChange={ handleFilterChange }
        >
          { renderOptions(selectOptions) }

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
