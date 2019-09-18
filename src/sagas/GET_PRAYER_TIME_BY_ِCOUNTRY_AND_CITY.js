import { call, put } from 'redux-saga/effects';

import bffApi from '../API';
import { aladhanUrl } from '../helpers/urls';
import {
  getPrayerTimeByCityError,
  getPrayerTimeByCitySuccess,
} from '../API/actions';

export default function* getPrayerTimeByCountryAndCity({ payload }) {
  try {
    const { city, country, method, month, year } = payload;
    const client = bffApi(aladhanUrl);
    const { data } = yield call(
      client.getPrayerTimeByCountryAndCity,
      city,
      country,
      method,
      month,
      year
    );
    yield put(getPrayerTimeByCitySuccess(data));
  } catch (e) {
    console.log(e);
    yield put(getPrayerTimeByCityError(e.toString()));
  }
}
