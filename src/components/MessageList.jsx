import React from 'react';

export default class MessageList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let { messages } = this.props;

    return (
      <ul>
        {messages.map(message => <li key={message.timestamp}><strong>{message.username}:</strong> {message.text}</li>)}
      </ul>
    );
  }

}
