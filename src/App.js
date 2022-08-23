import React from 'react';
import './App.css';
import PlanetsTable from './components/PlanetsTable';
import InputFilter from './components/InputFilter';
import AppProvider from './context/AppProvider';
import SelectFilters from './components/SelectFilters';
// import RenderFilters from './components/RenderFilters';

function App() {
  return (
    <AppProvider>
      <h1>Star Wars</h1>
      <InputFilter />
      <SelectFilters />
      {/* <RenderFilters /> */}
      <div>
        {/* <ActiveFilters /> */}
        <PlanetsTable />
      </div>
    </AppProvider>
  );
}

export default App;
