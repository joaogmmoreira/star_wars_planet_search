import React, { useContext } from 'react';
import PlanetsTableContent from './PlanetsTableContent';
import AppContext from '../context/AppContext';

function PlanetsTable() {
  const { tableInfo } = useContext(AppContext);

  if (tableInfo.length === 0) {
    return (
      <h2>LOADING...</h2>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edite</th>
          <th>URL</th>
        </tr>
      </thead>
      {
        tableInfo.map((element) => (<PlanetsTableContent
          key={ element.name }
          element={ element }
        />
        ))
      }
    </table>
  );
}

export default PlanetsTable;
