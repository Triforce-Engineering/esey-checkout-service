import styled from 'styled-components';

const StyledButton = styled.button`
  display: block;
  height: 31px;
  width: 206px;
  margin-bottom: 10px;
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
export default StyledButton;