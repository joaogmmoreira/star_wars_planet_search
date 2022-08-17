import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function InputFilter() {
  const { handleChange } = useContext(AppContext);

  return (
    <form>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ handleChange }
      />
    </form>
  );
}

export default InputFilter;
