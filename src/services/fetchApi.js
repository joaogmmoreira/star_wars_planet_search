const PLANETS_ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = async () => {
  const response = await fetch(`${PLANETS_ENDPOINT}`);
  const json = await response.json();

  return json;
};

export default getPlanets;
