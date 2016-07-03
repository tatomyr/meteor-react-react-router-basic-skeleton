import React from 'react';
import { Link } from 'react-router';

import { LoginForm } from './LoginForm.jsx';
import { Profile } from './Profile.jsx';

//import ReactDOM from 'react-dom';
//import ListNavigation from './listNavigation';
//import { Template } from 'meteor/templating';
//import { Blaze } from 'meteor/blaze';


export class Header extends React.Component {

  /*
  showModal() {
    $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });
  }*/

  componentDidMount() {
    $('.modal-trigger').leanModal();
  }

  /*userIsSigned() {
    Meteor.user()
  }*/

  render() {
    const username = 'dfg'; //Meteor.user().username;

    return (
      <header className="header" id="header" role="banner">

        [HEADER]
        <Link to="/">(home)</Link>
        <Link to="/products">(products)</Link>

        {/*Modal Trigger*/}
        { username ?
          <a className="waves-effect waves-light btn modal-trigger yellow" href="#modal2">{username}</a>
          : <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Sign in</a>
        }

        {/*<div id="modal2" className="modal">
          <div className="modal-content">

            <Profile />
          </div>
          <div className="modal-footer">

          </div>
        </div>
        {/*<!-- Modal Structure -->*/}
        <div id="modal1" className="modal">
          <div className="modal-content">

            <LoginForm />
          </div>
          <div className="modal-footer">

          </div>
        </div>

      </header>
    );
  }
}
