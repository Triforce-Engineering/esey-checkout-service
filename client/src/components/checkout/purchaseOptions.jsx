import React from 'react';
import $ from 'jquery';
import AddToCart from './addToCart.jsx';
import BuyNow from './buyNow.jsx';


class purchaseOptions extends React.Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.buyNow = this.buyNow.bind(this);
  }

  addToCart() {
    $.ajax({
      url: `/users/0/cart/`,
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({quantity: 4, itemId: this.props.item.item_id}),
      success: () => {
        console.log('added to cart');
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  
  buyNow() {
    $.ajax({
      url: `/users/0/purchases/`,
      method: 'POST',
      contentType: 'application/json',
      success: () => {
        console.log('Items in cart purchasesd');
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  render() {
    return (
      <div>
        <AddToCart addToCart={this.addToCart} />
        <BuyNow onBuyNowClick={this.buyNow} />
      </div>
    )
  }
}

export default purchaseOptions;