import React from 'react';

export class Product extends React.Component {




  render() {
    //console.log(this.props);
    const { _id, author, content } = this.props.item;
    console.log(_id, author, content);


    return (
      <div className="product" >
        certain product
        <div>{_id}</div>
      </div>
    );
  }
}
