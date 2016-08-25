import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions';
import SocketClient from '../socket-client';

class MessageComposer extends React.Component {

  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(e) {
    let { sendMessage, username } = this.props
      , { input } = this.refs;

    if(e.which === 13) {
      let message = {
        username,
        timestamp: Date.now(),
        text: input.value
      };

      sendMessage(message);
      SocketClient.emit('chat message', message);

      input.value = '';
    }
  }

  render() {
    return (
      <div>
        <input ref="input" type="text" onKeyUp={this.handleKeyUp} />
      </div>
    );
  }

}

export default connect(
  state => ({ messages: state.messages, username: state.username }),
  dispatch => ({ sendMessage: (message) => dispatch(addMessage(message)) })
)(MessageComposer);
