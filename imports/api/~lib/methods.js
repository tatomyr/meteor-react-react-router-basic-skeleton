import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Products } from '../models/products.js';



Meteor.methods({
  'products.addNew'(content) {

    // Check for admin


    Products.insert({
      createdAt: new Date(),
      author: this.userId,
      content,
    });
  }
});
