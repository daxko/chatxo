import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addUser } from '../actions';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(e) {
    let { addUser } = this.props
      , { input } = this.refs;

    if(e.which === 13) {
      addUser(input.value);
      this.props.router.push('/');
    }
  }

  render() {
    return (
      <div>
        <label>
          What is your name?
          <input ref="input" type="text" onKeyUp={this.handleKeyUp} />
        </label>
      </div>
    );
  }

}

export default connect(
  null,
  dispatch => ({ addUser: (username) => dispatch(addUser(username)) })
)(withRouter(Login));