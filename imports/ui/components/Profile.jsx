import React from 'react';
//import { Link } from 'react-router';

export class Logout extends React.Component {


  logout(event) {
    event.preventDefault();

    console.log(Meteor.user());
  }

  render() {
    return (
      <div>
        <button className="waves-effect waves-light btn red" onClick={this.logout}>Log out</button>
        <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Close</a>

      </div>
    );
  }
}
