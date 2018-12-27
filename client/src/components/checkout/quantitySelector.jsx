import React from 'react';
import styled from 'styled-components';

const StyledSelector = styled.select`
  height: 21px;
  width: 40px;
  padding: 3px;
  margin-bottom: 24px;
  margin-top: 14px;
  font-family: Arial, sans-serif;
  font-size: 13px;
  background-color: rgb(248, 248, 248);
  border-color: rgb(221, 221, 221);
`

const QtySelector = function(props) {
  let optionItems = [];
  for (let x = 1; x <= props.stock; x++) {
    optionItems.push(<option key={x}>{x}</option>);
  }
  return (
    <StyledSelector>
      {optionItems}
    </StyledSelector>
  )
}

export default QtySelector;