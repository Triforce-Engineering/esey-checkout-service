import React from 'react';
import styled from 'styled-components';
import buttons from './buttonStyles.jsx';
import { LineBreak, StyledBox } from './checkoutMain.jsx';
import { AddToCartBtn } from './addToCart.jsx';

const ContentBox = styled.div `
  max-height: 664px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 14px 18px;
`
const ViewListBtn = styled(buttons.AddToListBtn)`
  border-radius: 3px;
  width: 206px;
  text-align: center;
`
const StyledTitle = styled.div `
  font-size: 20px;
  line-height: 20px;
  height: 25px;
  width: 862px;
  margin-bottom: 20px;
`
const ListModalContent = function(props) {
  return (
    <ContentBox>
      <StyledTitle>
        {props.item.onList ? 'This item was already in ' : '1 item added to '}
         <buttons.StyledLink style={{fontSize: '20px'}}>Shopping List</buttons.StyledLink>
         {props.item.onList ? <StyledTitle style={{fontSize: '13px', color: '#666666', marginTop: '3px'}}> We've moved it to the top of the list.</StyledTitle> : null}
      </StyledTitle>
      <div style={{display: 'inline-block', width: '620px'}}>
        <img src={props.item.imgUrl} style={{height: '110px'}}></img>
      </div>
      <StyledBox style={{display: 'inline-block', marginBottom: '10px'}}>
        <ViewListBtn>View Your List</ViewListBtn>
        <AddToCartBtn>Continue shopping</AddToCartBtn>
      </StyledBox>
      <LineBreak />
      title for recommended items
      + mapped related items component
    </ContentBox>
  )
}

export default ListModalContent;