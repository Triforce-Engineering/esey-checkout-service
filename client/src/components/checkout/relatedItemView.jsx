import React from 'react';
import styled from 'styled-components';
import buttons from './buttonStyles.jsx';
import { Price } from './checkoutMain.jsx';
import { AddToCartBtn } from './addToCart.jsx';

const RelatedItemDiv = styled.div`
  display: inline-block;
  line-height: 20px;
  height: 305px;
  width: 189px;
  margin: 0 7px 0 7px;
  padding-top: 10px;
`

const TinyAddToCartBtn = styled(AddToCartBtn)`
  height: 22px;
  width: 135px;
  margin-bottom: 5px;
  font-size: 10px;
`

const TinyAddToListBtn = styled(buttons.AddToListBtn)`
  height: 22px;
  width: 135px;
  margin-bottom: 5px;
  border-radius: 3px;
  text-align: center;
  padding: 0;
  font-size: 10px;
`

const RelatedItemView = function(props) {
  return (
    <RelatedItemDiv>
      <div style={{height: '145px', width: '180px', paddingBottom: '10px'}}>
      <buttons.StyledLink>
        <img src={props.relatedItem.imgUrl} style={{height: '135px'}}></img>
        <br></br>
        {props.relatedItem.name}
      </buttons.StyledLink>
      </div>
      <div>
        <div>
          ****** ({props.relatedItem.numOfRatings})
        </div>
        <Price style={{color: '#900', fontSize: '16px'}}>${(props.relatedItem.price/100).toFixed(2)}</Price>
        <TinyAddToCartBtn>Add to Cart</TinyAddToCartBtn>
        <TinyAddToListBtn>Add to List</TinyAddToListBtn>
      </div>
    </RelatedItemDiv>
  )
}

export default RelatedItemView;