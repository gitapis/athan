import { cities } from './../helpers/strings';

const defaultState = cities;

export default function(state = defaultState, action) {
  switch (action.type) {
    case 'SELECT_CITIES':
      return action.payload;

    default:
      return state;
  }
}
