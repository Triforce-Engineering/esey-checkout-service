import React from 'react';
import styled from 'styled-components';

const StyledCheckoutBox = styled.div `
  height: 576px;
  width: 242px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 14px 18px;
  box-sizing: border-box;
  display: block;
  position: relative;
`
const Price = styled.div `
  text-rendering: optimizeLegibility;
  font-size: 17px;
  line-height: 1.255;
  color: #B12704;
  font-family: Arial, sans-serif;
`

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={'./images/socialmedia.png'} style={{width: '230px'}}></img>
        <StyledCheckoutBox>
          <Price>$17.97</Price>
          <img src={'./images/primelogo.png'} style={{width: '53px'}}></img>
        </StyledCheckoutBox>
      </div>
    );
  }
}

export default Checkout;