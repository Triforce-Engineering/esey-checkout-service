import React from 'react';
import styled from 'styled-components';
import buttons from './buttonStyles.jsx';
import ListModalContent from './listModalContent.jsx';

const ModalBox = styled.div `
  display: block;
  position:fixed;
  background: white;
  width: 898px;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  border-radius: 4px;
  border-color: rgba(0,0,0,.75);
  box-shadow: 0 4px 6px rgba(0,0,0,.25);
  `
  const ShowModal = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
`
const HideModal = styled.div `
  display: none;
`

const Header = styled.header `
  position: relative;
  height: 36px;
  width: auto;
  text-align: left;
  background: linear-gradient(to bottom,#f7f7f7,#eaeaea);
  border-radius: 4px 4px 0 0;
  border-bottom: 1px solid #cdcdcd;
  border-bottom-color: rgba(0,0,0,.2);
  box-shadow: 0 1px 0 rgba(255,255,255,.5) inset, 0 -1px 0 rgba(255,255,255,.4) inset;
  padding: 0 14px;
  margin: 0;
`
const HeaderText = styled.h4 `
  height: 35px;
  padding: 10px 0 9px;
  font-size: 13px;
  font-weight: 700;
  margin: 0 20px 0 0;
  line-height: 16px;
  color: #111;
`
const ListModalContainer = function(props) {
  return (
    <div>
      {props.show ? 
      <ShowModal>
        <ModalBox>
          <Header>
            <HeaderText>Add to List</HeaderText>
            <buttons.XClose onClick={props.handleClose}>x</buttons.XClose>
          </Header>
          <ListModalContent item={props.item} relatedItems={props.relatedItems}/>
        </ModalBox>
      </ShowModal> : 
      <HideModal/>}
    </div>
  )
}

export default ListModalContainer;