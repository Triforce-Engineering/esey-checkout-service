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

buttons.AddToListBtn = styled(buttons.StyledButton)`
  display: inline-block;
  text-align: left;
  padding-left: 10px;
  width: 179px;
  border-radius: 3px 0 0 3px;
  border-color: #adb1b8 #a2a6ac #8d9096;
  background:linear-gradient(to bottom,#f7f8fa,#e7e9ec);

  :hover {
    border-color:#a2a6ac #979aa1 #82858a;
    background:linear-gradient(to bottom,#e7eaf0,#d9dce1);
  }

  :active {
    background-color: #dcdfe3
    box-shadow:0 1px 3px rgba(0,0,0,.2) inset;
    border-color:#adb1b8 #a2a6ac #a2a6ac;
  }
  
  :hover:active {
    border-color:#adb1b8 #a2a6ac #a2a6ac;
  }

  :focus {
    box-shadow:0 0 3px 2px rgba(228,121,17,.5);
  }
`

buttons.DropDown = styled(buttons.AddToListBtn)`
  width: 25px;
  padding: 0px;
  border-radius: 0 3px 3px 0;
  border-left-width: 0;
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
