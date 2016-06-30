import React from 'react';
//import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import { Header } from './components/Header.jsx';


//import { sendContacts } from '../../api/events';

export class MainLayout extends React.Component {

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
