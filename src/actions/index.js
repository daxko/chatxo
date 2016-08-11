export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_USER = 'ADD_USER';

export function addMessage(text) {
  return {
    type: ADD_MESSAGE,
    text
  };
}

export function addUser(username) {
  return {
    type: ADD_USER,
    username
  };
}
