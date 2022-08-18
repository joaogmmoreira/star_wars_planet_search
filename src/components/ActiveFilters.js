import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function ActiveFilters() {
  const { activeFilters } = useContext(AppContext);
  // console.log(activeFilters);
  const renderFilters = () => (
    activeFilters.map((element) => (
      <div key={ element }>
        <button
          type="button"
          onClick={ () => {
            activeFilters
              .filter((element2) => !element2.includes(activeFilters));
            // resolver
          } }
        >
          {`${element[0]} ${element[1]} ${element[2]}`}
        </button>
      </div>
    ))
  );

  return renderFilters();
}

export default ActiveFilters;
