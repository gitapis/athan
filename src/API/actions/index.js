import { createAction } from '../../helpers/helper';

export const GET_PRAYER_TIME_REQUEST = 'GET_PRAYER_TIME_REQUEST';
export const GET_PRAYER_TIME_REQUEST_ERROR = 'GET_PRAYER_TIME_REQUEST_ERROR';
export const GET_PRAYER_TIME_REQUEST_SUCCESS =
  'GET_PRAYER_TIME_REQUEST_SUCCESS';

export const GET_PRAYER_TIME_BY_CITY_REQUEST =
  'GET_PRAYER_TIME_BY_CITY_REQUEST';
export const GET_PRAYER_TIME_BY_CITY_REQUEST_ERROR =
  'GET_PRAYER_TIME_BY_CITY_REQUEST_ERROR';
export const GET_PRAYER_TIME_BY_CITY_REQUEST_SUCCESS =
  'GET_PRAYER_TIME_BY_CITY_REQUEST_SUCCESS';

export const getPrayerTime = createAction(
  GET_PRAYER_TIME_REQUEST,
  'city',
  'country',
  'method',
  'month',
  'year'
);
export const getPrayerTimeError = createAction(
  GET_PRAYER_TIME_REQUEST_ERROR,
  'error'
);
export const getPrayerTimeSuccess = createAction(
  GET_PRAYER_TIME_REQUEST_SUCCESS
);

export const getPrayerTimeByCity = createAction(
  GET_PRAYER_TIME_BY_CITY_REQUEST,
  'city'
);
export const getPrayerTimeByCityError = createAction(
  GET_PRAYER_TIME_BY_CITY_REQUEST_ERROR,
  'error'
);
export const getPrayerTimeByCitySuccess = createAction(
  GET_PRAYER_TIME_BY_CITY_REQUEST_SUCCESS
);
