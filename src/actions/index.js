export function selectCulture(Culture) {
  return {
    type: 'SELECT_CULTURE',
    payload: Culture,
  };
}

export function selectCity(City) {
  return {
    type: 'SELECT_CITY',
    payload: City,
  };
}

export function selectCities(Cities) {
  return {
    type: 'SELECT_CITIES',
    payload: Cities,
  };
}

export function selectCountry(Country) {
  return {
    type: 'SELECT_COUNTRY',
    payload: Country,
  };
}
