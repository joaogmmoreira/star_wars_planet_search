import PropTypes from 'prop-types';
import React from 'react';

function PlanetsTableContent({ element }) {
  const {
    name,
    rotation_period: rotationPeriod,
    orbital_period: orbitalPeriod,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water: surfaceWater,
    population,
    films,
    created,
    edited,
    url,

  } = element;

  return (
    <tbody>
      <tr>
        <td data-testid="row">{ name }</td>
        <td data-testid="row">{ rotationPeriod }</td>
        <td data-testid="row">{ orbitalPeriod }</td>
        <td data-testid="row">{ diameter }</td>
        <td data-testid="row">{ climate }</td>
        <td data-testid="row">{ gravity }</td>
        <td data-testid="row">{ terrain }</td>
        <td data-testid="row">{ surfaceWater }</td>
        <td data-testid="row">{ population }</td>
        <td data-testid="row">{ films }</td>
        <td data-testid="row">{ films }</td>
        <td data-testid="row">{ films }</td>
        <td data-testid="row">{ created }</td>
        <td data-testid="row">{ edited }</td>
        <td data-testid="row">{ url }</td>
      </tr>
    </tbody>
  );
}

PlanetsTableContent.propTypes = {
  element: PropTypes.shape({
    climate: PropTypes.string,
    created: PropTypes.string,
    diameter: PropTypes.string,
    edited: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string),
    gravity: PropTypes.string,
    name: PropTypes.string,
    orbital_period: PropTypes.string,
    population: PropTypes.string,
    rotation_period: PropTypes.string,
    surface_water: PropTypes.string,
    terrain: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default PlanetsTableContent;
