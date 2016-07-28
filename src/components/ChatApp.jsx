import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  handleKeyup(e) {
    if(e.which === '13') {
      this.refs.input.value = '';
    }
  }

  render() {
    let { messages } = this.props;

    return (
      <div>
        <ul>
          {messages.map(message => <li>{message.text}</li>)}
        </ul>
        <input ref="input" type="text" onKeyUp={this.handleKeyup} />
      </div>
    );
  }

}

export default connect(state => ({ messages: state.messages }))(App);