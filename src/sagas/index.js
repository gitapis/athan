import { takeEvery } from 'redux-saga/effects';

import {
  GET_PRAYER_TIME_REQUEST,
  GET_PRAYER_TIME_BY_CITY_REQUEST,
} from '../API/actions';
import getPrayerTimeByCity from './GET_PRAYER_TIME_BY_CITY';
import getPrayerTimeByCountryAndCity from './GET_PRAYER_TIME_BY_ِCOUNTRY_AND_CITY';

export function* getPrayerTimeByCitySaga() {
  yield takeEvery(GET_PRAYER_TIME_BY_CITY_REQUEST, getPrayerTimeByCity);
}

export function* getPrayerTimeByCountryAndCitySaga() {
  yield takeEvery(GET_PRAYER_TIME_REQUEST, getPrayerTimeByCountryAndCity);
}
