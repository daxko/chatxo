import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions';

class ChatApp extends React.Component {

  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(e) {
    let { sendMessage } = this.props
      , { input } = this.refs;

    if(e.which === 13) {
      sendMessage(input.value);
      input.value = '';
    }
  }

  render() {
    let { messages } = this.props;

    return (
      <div>
        <ul>
          {messages.map(message => <li key={message.timestamp}><strong>{message.username}:</strong> {message.text}</li>)}
        </ul>
        <input ref="input" type="text" onKeyUp={this.handleKeyUp} />
      </div>
    );
  }

}

export default connect(
  state => ({ messages: state.messages, username: state.user }),
  dispatch => ({ sendMessage: (message) => dispatch(addMessage(message)) })
)(ChatApp);