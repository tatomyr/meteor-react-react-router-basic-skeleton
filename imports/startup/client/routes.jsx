import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import  MainLayout  from '../../ui/MainLayout.jsx';
import { HomePage } from '../../ui/components/HomePage.jsx';
import ProductsList from '../../ui/components/ProductsList.jsx';
import { About } from '../../ui/components/About.jsx';
import { Contacts } from '../../ui/components/Contacts.jsx';


import { NotFound } from '../../ui/components/NotFound.jsx';

Meteor.startup( () => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ MainLayout }>
        <IndexRoute component={ HomePage } />
        <Route path="products-list" component={ ProductsList } />
        <Route path="about" component={ About } />
        <Route path="contacts" component={ Contacts } />

        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById( 'react-root' )
  );
});
