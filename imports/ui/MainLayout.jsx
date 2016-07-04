import React from 'react';
//import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import { Header } from './components/Header.jsx';

import { createContainer } from 'meteor/react-meteor-data';


//import { sendContacts } from '../../api/events';

class MainLayout extends React.Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

//export default createContainer(() => {
//}, HomePage);
export default createContainer(() => {


  Meteor.subscribe('products');

  return {
    /*products: Products.find({}).fetch(),*/
    user: Meteor.user()
  };
}, MainLayout);
