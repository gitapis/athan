export default function(state = null, action) {
  switch (action.type) {
    case 'SELECT_COUNTRY':
      return action.payload;

    default:
      return state;
  }
}
