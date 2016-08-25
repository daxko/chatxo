import React from 'react';
import moment from 'moment';

export default class MessageList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let { messages } = this.props;

    return (
      <ul>
        {messages.map(message => <li key={message.timestamp}><strong>{message.username}</strong><span className="timestamp"> ({moment(message.timestamp).format('MMM DD YYYY hh:mm:ss A')})</span>: {message.text}</li>)}
      </ul>
    );
  }

}
