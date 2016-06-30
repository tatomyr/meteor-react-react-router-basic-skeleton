import React from 'react';
import { Link } from 'react-router';

//import ReactDOM from 'react-dom';
//import ListNavigation from './listNavigation';
//import { Template } from 'meteor/templating';
//import { Blaze } from 'meteor/blaze';

export class Header extends React.Component {



  render() {
    return (
      <header className="header" id="header" role="banner">
        <div >
          [HEADER]
          <Link to="/">(->home)</Link>
          <Link to="/products">(->products)</Link>
        </div>
      </header>
    );
  }
}
