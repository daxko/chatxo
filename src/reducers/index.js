import { ADD_MESSAGE } from '../actions';

function reducer(state = {}, action) {
  switch(action.type) {
    case ADD_MESSAGE: {
      return Object.assign({}, state, {
        messages: [
          ...state.messages,
          {
            text: action.text
          }
        ]
      });
    }
    default:
      return state;
  }
}

export default reducer;