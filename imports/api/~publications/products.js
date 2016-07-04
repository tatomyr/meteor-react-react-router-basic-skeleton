import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { Products } from '../models/products.js';

if (Meteor.isServer) {
  Meteor.publish('products', function () {
    console.log('[publish]');
    return Products.find({});
  });
}
