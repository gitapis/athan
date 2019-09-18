import { combineReducers } from 'redux';
import ActiveCity from './active_city';
import ActiveCountry from './active_country';
import ActiveCulture from './active_Culture';
import Cities from './cities';
import Countries from './countries';
import Cultures from './cultures';
import PrayerTimeInformations from './prayer_time_informations';

const rootReducer = combineReducers({
  countries: Countries,
  activeCountry: ActiveCountry,
  cities: Cities,
  activeCity: ActiveCity,
  prayerTimeInformations: PrayerTimeInformations,
  cultures: Cultures,
  activeCulture: ActiveCulture,
});

export default rootReducer;
