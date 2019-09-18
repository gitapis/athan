import {
  ErrorType,
  LoadingType,
  SuccessType,
} from '../components/RequestStatus';
import {
  GET_PRAYER_TIME_REQUEST,
  GET_PRAYER_TIME_REQUEST_ERROR,
  GET_PRAYER_TIME_REQUEST_SUCCESS,
  GET_PRAYER_TIME_BY_CITY_REQUEST,
  GET_PRAYER_TIME_BY_CITY_REQUEST_ERROR,
  GET_PRAYER_TIME_BY_CITY_REQUEST_SUCCESS,
} from '../API/actions';

const defaultState = {
  prayerTimeInformations: {
    informations: null,
    fetchingStatus: SuccessType,
  },
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_PRAYER_TIME_REQUEST:
      return {
        ...state,
        prayerTimeInformations: {
          ...state.prayerTimeInformations,
          fetchingStatus: LoadingType,
        },
      };

    case GET_PRAYER_TIME_REQUEST_ERROR:
      return {
        ...state,
        prayerTimeInformations: {
          ...state.prayerTimeInformations,
          fetchingStatus: ErrorType,
        },
      };

    case GET_PRAYER_TIME_REQUEST_SUCCESS:
      return {
        ...state,
        prayerTimeInformations: {
          ...state.prayerTimeInformations,
          informations: action.payload,
          fetchingStatus: SuccessType,
        },
      };

    case GET_PRAYER_TIME_BY_CITY_REQUEST:
      return {
        ...state,
        prayerTimeInformations: {
          ...state.prayerTimeInformations,
          fetchingStatus: LoadingType,
        },
      };

    case GET_PRAYER_TIME_BY_CITY_REQUEST_ERROR:
      return {
        ...state,
        prayerTimeInformations: {
          ...state.prayerTimeInformations,
          fetchingStatus: ErrorType,
        },
      };

    case GET_PRAYER_TIME_BY_CITY_REQUEST_SUCCESS:
      return {
        ...state,
        prayerTimeInformations: {
          ...state.prayerTimeInformations,
          informations: action.payload,
          fetchingStatus: SuccessType,
        },
      };

    default:
      return state;
  }
}
