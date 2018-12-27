import React from 'react';
import styled from 'styled-components';
import buttons from './buttonStyles.jsx';
import QtySelector from './quantitySelector.jsx';

const StyledDiv = styled.div`
  font-family: Arial, sans-serif;
  font-size: 13px;
  line-height: 19px;
  color: #111;
  text-align: left;
  margin-top: 6px;
`

const InStock = styled(StyledDiv)`
  color: #008a00;
  font-size: 17px;
`
const LowStock = styled(InStock)`
  color: #B12704;
`
var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const StockInfo = function(props) {

  return (
    <StyledDiv>
      FREE delivery by <b>{days[d.getDay() + 2]}.</b> <buttons.StyledLink>Details</buttons.StyledLink> <br></br>
      
      {props.stock < 5 ?    
      <LowStock>
        Only {props.stock} left in stock - order soon.
      </LowStock> : 
      <InStock>
        In Stock.
      </InStock>}
   
      Sold by <buttons.StyledLink>{props.name.split(' ')[0] + ' World'}</buttons.StyledLink> and <buttons.StyledLink>Fulfilled by Amazon.</buttons.StyledLink> Gift Wrap Available. <br></br>
      Qty: <QtySelector stock={props.stock}></QtySelector>

    </StyledDiv>
  )
}

export default StockInfo;