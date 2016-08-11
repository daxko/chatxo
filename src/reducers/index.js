import { ADD_MESSAGE, ADD_USER } from '../actions';

function reducer(state = {}, action) {
  switch(action.type) {

    case ADD_MESSAGE: {
      return Object.assign({}, state, {
        messages: [
          ...state.messages,
          {
            username: state.username,
            timestamp: Date.now(),
            text: action.text
          }
        ]
      });
    }

    case ADD_USER: {
      return Object.assign({}, state, {
        username: action.username
      });
    }

    default:
      return state;
  }
}

export default reducer;