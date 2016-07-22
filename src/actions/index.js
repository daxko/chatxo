const ADD_MESSAGE = 'ADD_MESSAGE'

function addMessage(text) {
  return {
    type: ADD_MESSAGE,
    text
  }
}
