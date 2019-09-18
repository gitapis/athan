import { call, put } from 'redux-saga/effects';

import bffApi from '../API';
import { prayZoneUrl } from '../helpers/urls';
import {
  getPrayerTimeByCityError,
  getPrayerTimeByCitySuccess,
} from '../API/actions';

export default function* getPrayerTimeByCity({ payload }) {
  try {
    const { city } = payload;
    const client = bffApi(prayZoneUrl);

    const { data } = yield call(client.getPrayerTimeByCity, city);
    yield put(getPrayerTimeByCitySuccess(data));
  } catch (e) {
    console.log(e);
    yield put(getPrayerTimeByCityError(e.toString()));
  }
}
