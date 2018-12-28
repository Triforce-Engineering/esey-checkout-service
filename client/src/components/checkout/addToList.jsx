import React from 'react';
import styled from 'styled-components';
import buttons from './buttonStyles.jsx';
import ListModal from './listModal.jsx';

const AddToListBtn = styled(buttons.StyledButton)`
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
const DropDown = styled(AddToListBtn)`
  width: 25px;
  padding: 0px;
  border-radius: 0 3px 3px 0;
  border-left-width: 0;
`
const DropdownIcon = styled.div`
  width: 25px;
  height: 25px;
  position: relative;
  top: 2.5px;
  left: 2.5px;
  background: transparent; 
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/e/ec/Angle_down_font_awesome.svg');
  background-size: 18px 18px;
  background-repeat: no-repeat;
`
class AddToList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({show: true});
  }

  hideModal() {
    this.setState({show: false});
  }

  render() {
    return (
      <div>
        <ListModal show={this.state.show} handleClose={this.hideModal} >
        </ListModal>
        <AddToListBtn onClick={this.showModal}>
          Add to List
        </AddToListBtn>
        <DropDown>
          <DropdownIcon> 
          </DropdownIcon>
        </DropDown> 
      </div>
    )
  }
}

export default AddToList;