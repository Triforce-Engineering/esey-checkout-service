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
export default buttons;
