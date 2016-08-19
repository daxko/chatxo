import React from 'react';
import { connect } from 'react-redux';
import socket from '../socket-client';
import MessageComposer from './MessageComposer';
import MessageList from './MessageList';
import { addMessage } from '../actions';

class ChatApp extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { dispatch } = this.props;

    socket.on('new message', message => {
      console.log(message);
      // the received message will need to be dispatched here
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
  state => ({ messages: state.messages })
)(ChatApp);
