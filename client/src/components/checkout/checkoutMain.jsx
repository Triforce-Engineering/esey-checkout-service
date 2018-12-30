import React from 'react';
import styled from 'styled-components';
import StockInfo from './stockInfo.jsx';
import PurchaseOptions from './purchaseOptions.jsx';
import AddToList from './addToList.jsx';
import buttons from './buttonStyles.jsx';
import $ from 'jquery';

const StyledBox = styled.div `
  height: auto;
  width: 242px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 14px 18px;
  box-sizing: border-box;
  display: block;
  position: relative;
`
const Price = styled.div `
  text-rendering: optimizeLegibility;
  font-size: 17px;
  line-height: 1.255;
  color: #B12704;
`
const LineBreak = styled.hr `
  background-color: transparent;
  border-top: 1px;
  border-top-color: #e7e7e7;
  margin-bottom: 14px;
`
const SmallLink = styled(buttons.StyledLink)`
  font-size: 12px;
`
class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        name: '',
        price: 0,
        stock: 0,
        onList: false,
        rating: 0,
        numOfRatings: 0,
        relatedItems: [],
        imgUrl: ''
      },
      relatedItems: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: `http://localhost:3002/items/75`,
      method: 'GET',
      contentType: 'application/json',
      success: (results) => {
        this.setState({
          item: results[0]
        }, () => {
          $.ajax({
            url: `http://localhost:3002/items/${this.state.item.item_id}/related`,
            method: 'GET',
            contentType: 'application/json',
            success: (results) => {
              this.setState({
                relatedItems: results
              })
            },
            error: (err) => {
              console.log(err);
            }
          });
        });
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  render() {
    return (
      <div style={{fontFamily: 'Arial, sans-serif'}}>
        <img src={'./images/socialmedia.png'} style={{width: '230px'}}></img>
        <StyledBox>
          <Price>${(this.state.item.price/100).toFixed(2)}</Price>
          <img src={'./images/primelogo.png'} style={{width: '53px'}}></img>
          <StockInfo stock={this.state.item.stock} name={this.state.item.name}/>
          <PurchaseOptions item={this.state.item} />
          <LineBreak />
          <SmallLink style={{fontSize: '11px'}}> Turn on 1-Click ordering for this browser</SmallLink>
          <LineBreak />
          <div>
              <img src={'./images/mapsymbol.png'} style={{width: '12px', position: 'relative', top: '-19px', paddingRight: '5px'}}></img>
            <div style={{display: 'inline-block', width: '120px'}}>
              <SmallLink> Deliver to Jessica - Albany 94706</SmallLink>
            </div>
          </div>
          <LineBreak />
          <AddToList item={this.state.item} relatedItems={this.state.relatedItems}/>
          <div style={{textAlign: 'center'}}>
            <SmallLink>Add to your Dash Buttons</SmallLink>
          </div>
        </StyledBox>
      </div>
    );
  }
}

export default Checkout;
export { StyledBox, Price, LineBreak }