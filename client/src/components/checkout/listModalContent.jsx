import React from 'react';
import styled from 'styled-components';
import buttons from './buttonStyles.jsx';
import { LineBreak, Price } from './checkoutMain.jsx';

const StyledDiv = styled.div `
  max-height: 664px;
  overflow-y: auto;
  overflow-x: hidden;
`


const ListModalContent = function(props) {
  return (
    <StyledDiv>
      title, image, name of item
      <Price>$21.39</Price>
      grey box component
      <LineBreak />
      title for recommended items
      + mapped related items component
    </StyledDiv>
  )
}

export default ListModalContent;