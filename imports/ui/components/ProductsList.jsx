import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import React from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Products } from '/imports/api/api.js';

import { Product } from './Product.jsx';


class ProductsList extends React.Component {

  /*getProducts() {
    if (Meteor.subscribe('products').ready()) {
      return Products.find({});
    }
  }*/

  /*getMeteorData() {
    var data = {};
    if(Meteor.subscribe('singlePost', postId).ready()) {
      data.products = Products.findOne({});
    }
    console.log(data);
    return data;
  }*/

  renderProducts() {
    //console.log(this.props.products);
    return this.props.products.map((item) => (
      <Product key={item._id} item={item} />
    ));
    
  }

  addProduct() {

    const content= {
      "mongo": "client"
    };

    Meteor.call('products.addNew', content);
  }

  render() {
    //console.log(this.getProducts());

    //console.log(this.props.products);

    return (
      <div className="products" id="products">
        <div >
          [PRODUCTS LIST (all)(filters)]
          {this.renderProducts()}
          <button onClick={this.addProduct}>+</button>
        </div>
      </div>
    );
  }
}

export default createContainer(() => {


  Meteor.subscribe('products');

  return {
    products: Products.find({}, { sort: { createdAt: -1 } }).fetch()
  };
}, ProductsList);
