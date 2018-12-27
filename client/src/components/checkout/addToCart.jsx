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
  background-image: url('./images/cart.png');
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