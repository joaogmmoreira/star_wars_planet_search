import React, { useEffect, useState } from 'react';
import getPlanets from '../services/fetchApi';
import PlanetsTableContent from './PlanetsTableContent';

function PlanetsTable() {
  const [tableInfo, setTableInfo] = useState([]);

  const tableHeaderContent = async () => {
    const content = await getPlanets();
    const tableValues = content.results;
    tableValues.forEach((element) => delete element.residents);
    setTableInfo(tableValues);
  };

  useEffect(() => {
    tableHeaderContent();
  }, []);

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
