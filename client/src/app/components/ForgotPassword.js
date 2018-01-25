import React from 'react';

class ForgotPassword extends React.Component {
  handleClick(e) {
    e.preventDefault();
    this.props.getEmail(this.email.value);
  }

  render() {
    return (
      <div>
        <h2>Forgot Password?</h2>
        <br />
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          ref={ref => this.email = ref}
          placeholder="Enter your E-mail id"
        />
        <p>A reset link will be sent to this email-id</p>
        <br />
        <button
          className="btn btn-lg btn-primary btn-block"
          onClick={e => this.handleClick(e)}
        >
      Send reset link
        </button>
      </div>
    );
  }
}

export default ForgotPassword;
