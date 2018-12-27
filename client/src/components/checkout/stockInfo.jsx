import React from 'react';
import styled from 'styled-components';
import buttons from './buttonStyles.jsx';

const StyledDiv = styled.div`
  font-family: Arial, sans-serif;
  font-size: 13px;
  line-height: 19px;
  color: #111;
  text-align: left;
  margin-top: 6px;
`
const QtySelector = styled.select`
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

var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const StockInfo = function() {
  return (
    <StyledDiv>
      FREE delivery by <b>{days[d.getDay() + 2]}.</b> <buttons.StyledLink>Details</buttons.StyledLink> <br></br>
      Qty: <QtySelector></QtySelector>
    </StyledDiv>
  )
}

export default StockInfo;