import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
//import { check } from 'meteor/check';

export const Products = new Mongo.Collection("products");

//console.log(Products.find() );

if (Meteor.isServer) {

  Meteor.publish("products", () => {

    return Products.find({});
  });

}

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
