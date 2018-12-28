import React from 'react';
import styled from 'styled-components';
import buttons from './buttonStyles.jsx';

const ShowModal = styled.div `
  color: red;
`
const HideModal = styled.div `
  color: purple;
`
const ListModal = function(props) {
  return (
    <div>
      {props.show ? <ShowModal>Modal</ShowModal> : <HideModal>Modal</HideModal>}
    </div>
  )
}

export default ListModal;