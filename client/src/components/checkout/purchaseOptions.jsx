import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import buttons from './buttonStyles.jsx';
import AddToCart from './addToCart.jsx';


const BuyNow = styled(buttons.StyledButton) `
  background: linear-gradient(to bottom,#f6c88f,#ed9220);
  border-color: #ca7c1b #be751a #a56616;
}

  :hover {
    border-color:#be751a #b26d18 #9a5f15; 
    background: linear-gradient(to bottom,#f4bc77,#e18512);  
  }
  
  :active {
    border-color:#ca7c1b #be751a #be751a;
    background: #ed9220
  }
  
  :hover:active {
    border-color:#be751a #b26d18 #9a5f15;  
  }
`

const BuyIcon = styled(buttons.Icon) `
  background-image: url('./images/buynow.png');
`
class purchaseOptions extends React.Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    $.ajax({
      url: `http://localhost:3002/cart/${this.props.item.item_id}`,
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({quantity: 4}),
      success: () => {
        console.log('added to cart');
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
        <BuyNow>
          <BuyIcon />
          Buy Now
        </BuyNow>
      </div>
    )
  }
}

export default purchaseOptions;