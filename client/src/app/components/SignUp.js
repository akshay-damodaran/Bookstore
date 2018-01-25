import React from 'react';

class SignUp extends React.Component {
  static renderNoLoader() {
    return (
      <span>Register</span>
    );
  }

  static renderLoader() {
    return (
      <div>
        <span>Registering</span>
        {' '}
        <span className="loader" id="loader-2">
          <span />
          <span />
          <span />
        </span>
      </div>
    );
  }

  handleRegister(e) {
    e.preventDefault();
    const name = this.name.value;
    const userName = this.username.value;
    if (this.password.value.length < 8) {
      alert('Password must be of minimum 8 characters!');
    } else {
      const password = this.password.value;
      this.props.registerCredentials({ name, userName, password });
    }
  }

  render() {
    return (
      <div>
        <h2 className="form-signin-heading">Register</h2>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          ref={ref => this.name = ref}
          placeholder="Name"
          required
        />
        <br />
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          ref={ref => this.username = ref}
          placeholder="User Name"
          required
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          ref={ref => this.password = ref}
          placeholder="Password"
          required
        />
        <p>Minimum length is 8 characters</p>
        <button
          className="btn btn-lg btn-primary btn-block"
          type="submit"
          onClick={(e) => { this.handleRegister(e); }}
        >
          {this.props.loginPending ? SignUp.renderLoader() : SignUp.renderNoLoader()}
        </button>
        <br />
        <p>
          <span>Already registered? Login
            {' '}
            <a onClick={() => this.props.togglePage()}>Here</a>
          </span>
        </p>
      </div>
    );
  }
}

export default SignUp;
