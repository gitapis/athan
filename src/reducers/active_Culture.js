export default function(state = null, action) {
  switch (action.type) {
    case 'SELECT_CULTURE':
      return action.payload;

    default:
      return state;
  }
}
