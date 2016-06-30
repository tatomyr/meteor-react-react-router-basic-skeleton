import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { MainLayout } from '../../ui/MainLayout.jsx';
import { HomePage } from '../../ui/components/HomePage.jsx';
import { Products } from '../../ui/components/Products.jsx';


import { NotFound } from '../../ui/components/NotFound.jsx';

Meteor.startup( () => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ MainLayout }>
        <IndexRoute component={ HomePage } />
        <Route path="products" component={ Products } />

        <Route path="*" component={ NotFound }/>
      </Route>
    </Router>,
    document.getElementById( 'react-root' )
  );
});
