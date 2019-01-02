import React from 'react';
import styled from 'styled-components';
import buttons from './buttonStyles.jsx';
import { LineBreak, StyledBox } from './checkoutMain.jsx';
import { AddToCartBtn } from './addToCart.jsx';
import CurrentItemView from './currentItemView.jsx';
import RelatedItemView from './relatedItemView.jsx';

const ContentBox = styled.div `
  max-height: 639px;
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
         <buttons.StyledLink style={{fontSize: '20px', color:'#0055aa'}}>Shopping List</buttons.StyledLink>
         {props.item.onList ? <StyledTitle style={{fontSize: '13px', color: '#666666', marginTop: '3px'}}> We've moved it to the top of the list.</StyledTitle> : null}
      </StyledTitle>
      <div style={{display: 'inline-block', margin: '20px 0 10px 18px'}}>
        <CurrentItemView item={props.item} />
        <StyledBox style={{display: 'inline-block', verticalAlign: 'middle'}}>
          <ViewListBtn style={{marginBottom: '15px'}}>View Your List</ViewListBtn>
          <AddToCartBtn style={{margin: 0}}>Continue shopping</AddToCartBtn>
        </StyledBox>
      </div>
      <LineBreak />
      <StyledTitle style={{fontSize: '16px', lineHeight: '22px', color: '#333333', fontWeight: '700'}}>Customers who bought {props.item.name} also bought</StyledTitle>
      <div style={{padding: '0 65px 0 83px', height: '315px'}}>
        {props.relatedItems.map((relatedItem) => {
          return <RelatedItemView key={relatedItem.name} relatedItem={relatedItem} />
        })}
      </div>
      <LineBreak />
      <div style={{paddingBottom: '20px', fontSize: '20px', textAlign: 'center'}}>
        <img style={{height: '50px', width: '48px', verticalAlign: 'middle'}} src={'https://images-na.ssl-images-amazon.com/images/G/01/x-locale/communities/wishlist/uwl/UWL_aSmile._CB197586345_.png'}></img>
        <span style={{verticalAlign: 'middle', paddingLeft: '15px'}}>Add items from any website to your Amazon List</span>
        <buttons.StyledLink style={{fontSize: '16px', color: '#0055aa', paddingLeft: '10px'}}>Learn how</buttons.StyledLink>
      </div>
    </ContentBox>
  )
}

export default ListModalContent;