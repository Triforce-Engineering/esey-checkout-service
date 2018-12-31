import React from 'react';
import styled from 'styled-components';
import buttons from './buttonStyles.jsx';
import { Price } from './checkoutMain.jsx';

const CurrentItemView = function(props) {
  return (
    <div style={{display: 'inline-block', width: '602px'}}>
      <img src={props.item.imgUrl} style={{height: '110px', verticalAlign: 'middle'}}></img>
      <div style={{display: 'inline-block', paddingLeft: '10px', verticalAlign: 'top'}}>
        <buttons.StyledLink style={{color: '#0055aa'}}>{props.item.name}</buttons.StyledLink>
        <Price style={{color: '#990000', fontSize: '16px', padding: '8px 0 3px 0px'}}>${(props.item.price/100).toFixed(2)}</Price>
      </div>
    </div>
  )
}

export default CurrentItemView;