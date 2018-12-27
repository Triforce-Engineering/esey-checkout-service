import React from 'react';
import styled from 'styled-components';
import buttons from './buttonStyles.jsx';
import $ from 'jquery';

const AddToCart = styled(buttons.StyledButton) `
  background: linear-gradient(to bottom,#f7dfa5,#f0c14b);
  border-color: #a88734 #9c7e31 #846a29;

  :hover {
    border-color:#a88734 #9c7e31 #846a29;
    background: linear-gradient(to bottom,#f5d78e,#eeb933);  
  }
  
  :active {
    border-color: #a88734 #9c7e31 #9c7e31;
    background: #f0c14b;
  }
  
  :hover:active {
    border-color:#a88734 #9c7e31 #846a29;
  }
`
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
const Icon = styled.i `
  top: 2px;
  left: 2px;
  height: 25px;
  width: 25px;
  position: absolute;
  background-size: 25px 25px;
  background-repeat: no-repeat;
`
const CartIcon = styled(Icon) `
  background-image: url('./images/cart.png');
`
const BuyIcon = styled(Icon) `
  background-image: url('./images/buynow.png');
`
class purchaseOptions extends React.Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    $.ajax({
      url: `http://localhost:3002/cart/${this.props.item.id}`,
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
        <AddToCart className='cart' onClick={this.addToCart}>
          <CartIcon />
          Add to Cart
        </AddToCart>
        <BuyNow>
          <BuyIcon />
          Buy Now
        </BuyNow>
      </div>
    )
  }
}

export default purchaseOptions;