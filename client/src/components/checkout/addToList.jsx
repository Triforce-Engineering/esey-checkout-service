import React from 'react';
import styled from 'styled-components';
import buttons from './buttonStyles.jsx';
import ListModalContainer from './listModalContainer.jsx';

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
        <ListModalContainer show={this.state.show} handleClose={this.hideModal} >
        </ListModalContainer>
        <buttons.AddToListBtn onClick={this.showModal}>
          Add to List
        </buttons.AddToListBtn>
        <buttons.DropDown>
          <DropdownIcon> 
          </DropdownIcon>
        </buttons.DropDown> 
      </div>
    )
  }
}

export default AddToList;