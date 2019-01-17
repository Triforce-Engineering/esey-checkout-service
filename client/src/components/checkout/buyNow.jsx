import React from 'react';
import styled from 'styled-components';
import buttons from './buttonStyles.jsx';

const BuyNowButton = styled(buttons.StyledButton) `
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
  background-image: url(https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIBaseCSS@variables-sprite_2x-13acd72bb22e0c502de00d0afe21c494871da686._V2_.png);
  background-position: -35px -60px;
  background-size: 400px 900px;
`

const BuyNow = function(props) {
  return (
    <BuyNowButton className='cart' onClick={props.onBuyNowClick}>
      <BuyIcon />
      Buy Now
    </BuyNowButton>
  )
}

export default BuyNow;
export { BuyNow };