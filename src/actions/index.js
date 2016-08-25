export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_USER = 'ADD_USER';

export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    username: message.username,
    timestamp: message.timestamp,
    text: message.text
  };
}

export function addUser(username) {
  return {
    type: ADD_USER,
    username
  };
}
