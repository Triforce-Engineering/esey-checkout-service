import React from 'react';
import styled from 'styled-components';
import buttons from './buttonStyles.jsx';

const AddToCartBtn = styled(buttons.StyledButton) `
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

const CartIcon = styled(buttons.Icon) `
  background-position: -35px -5px;
  background-image: url(https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIBaseCSS@variables-sprite_2x-13acd72bb22e0c502de00d0afe21c494871da686._V2_.png);
  background-size: 400px 900px;
`

const AddToCart = function(props) {
  return (
    <AddToCartBtn className='cart' onClick={props.addToCart}>
      <CartIcon />
      Add to Cart
    </AddToCartBtn>
  )
}

export default AddToCart;
export { AddToCartBtn };