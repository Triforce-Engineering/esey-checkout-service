import React from 'react';
import styled from 'styled-components';

const StyledCheckoutBox = styled.div `
  height: 510px;
  width: 240px;
  border: 1px solid #ddd;
  border-radius: 4px;
`

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={'./images/socialmedia.png'} style={{width: '230px'}}></img>
        <StyledCheckoutBox />
      </div>
    );
  }
}

export default Checkout;