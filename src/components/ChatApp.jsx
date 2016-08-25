import React from 'react';
import { connect } from 'react-redux';
import socket from '../socket-client';
import MessageComposer from './MessageComposer';
import MessageList from './MessageList';
import { addMessage } from '../actions';

class ChatApp extends React.Component {

  constructor(props) {
    super(props);
    let { sendMessage } = this.props;

    socket.on('history', messages => {
      messages.forEach(message => {
        sendMessage(message);
      });
    });

    socket.emit('get history');
  }

  componentDidMount() {
    let { sendMessage } = this.props;

    socket.on('new message', message => {
      console.log(message);
      sendMessage(message);      
    });
  }

  render() {
    let { messages } = this.props;

    return (
      <div>
        <MessageList messages={messages} />
        <MessageComposer />
      </div>
    );
  }

}

export default connect(
  state => ({ messages: state.messages }),
  dispatch => ({ sendMessage: (message) => dispatch(addMessage(message)) })
)(ChatApp);
