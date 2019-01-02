import React from 'react';
import styled from 'styled-components';

const Star = styled.div `
  background-image: url(https://images-na.ssl-images-amazon.com/images/G/01/common/sprites/sprite-site-wide-3._CB375430972_.png);
  background-position: -30px -20px;
  width: 65px;
  height: 13px;
  position: relative;
  display: inline-block;
  margin-top: 9px;
`

const StarRating = function(props) {
  return (
    <Star />
  )
}

export default StarRating; 