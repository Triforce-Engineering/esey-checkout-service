import styled from 'styled-components';

const buttons = {};

buttons.StyledButton = styled.button`
  display: block;
  height: 31px;
  width: 206px;
  margin-bottom: 10px;
  padding: 0;
  position: relative;
  text-align: center;
  vertical-align: middle;
  color: #111;
  border-radius: 3px;
  cursor: pointer;
  font-size: 13px;
  line-height: 19px;
  font-family: Arial,sans-serif;
  
  :focus {
    border-color: #e77600;
    box-shadow: 0 0 3px 2px rgba(228,121,17,.5);
    outline:0;
  }
`

buttons.Icon = styled.i `
  top: 2px;
  left: 2px;
  height: 25px;
  width: 25px;
  position: absolute;
  background-size: 25px 25px;
  background-repeat: no-repeat;
`

buttons.StyledLink = styled.a`
  color: #0066c0;
  cursor: pointer;
  font-size: 13px;
  line-height: 19px;
  font-family: Arial,sans-serif;

  :hover {
    color: #c45500;
    text-decoration: underline;
  }
`

buttons.XClose = styled.button`
  display: block;
  cursor: pointer;
  zoom: 1.4;
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid;
  border-color: transparent;
  float: right;
  padding: 6px;
  position: absolute;
  top: 50%;
  right: 5px;
  margin: -7px 0 0;
  line-height: 0;
  font-family: Arial;
`
export default buttons;
