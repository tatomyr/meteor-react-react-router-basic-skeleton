import React from 'react';
//import { Link } from 'react-router';

export class LoginForm extends React.Component {


  login(event) {
    event.preventDefault();

    console.log('log in', this.refs.email.value, this.refs.username.value, this.refs.password.value);

  }

  signup(event) {
    event.preventDefault();

    console.log('sign up', this.refs.email.value, this.refs.username.value, this.refs.password.value);

    Accounts.createUser({
      email: this.refs.email.value,
      username: this.refs.username.value,
      password: this.refs.password.value
    }, function(err) {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <div class="card-panel">
          <h4>Log in</h4>
          <form className="col s12" id="login" onSubmit={this.login.bind(this)}>
            <div className="row">
              <div className="input-field col s12 l6">
                <input id="email" ref="email" type="email" className="validate" />
                <label for="email">Email</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12 l6">
                <input id="password" ref="password" type="password" className="validate" />
                <label for="password">Password</label>
              </div>
            </div>

            <input type="submit" value="Log in" className="waves-effect waves-light btn" />
            <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Close</a>
          </form>
        </div>

        <div class="card-panel">
          <h4>Or sign up</h4>
          <form className="col s12" id="signup" onSubmit={this.signup.bind(this)}>
            <div className="row">
              <div className="input-field col s12 l4">
                <input id="email" ref="email" type="email" className="validate" />
                <label for="email">Email</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12 l4">
                <input id="username" ref="username" type="text"  />
                <label for="username">Username</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12 l4">
                <input id="password" ref="password" type="password" className="validate" />
                <label for="password">Password</label>
              </div>
            </div>

            <input type="submit" value="Sign up" className="waves-effect waves-light btn" />
            <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Close</a>
          </form>
        </div>
      </div>
    );
  }
}
