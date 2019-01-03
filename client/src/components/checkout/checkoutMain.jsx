import React from 'react';
import styled from 'styled-components';
import StockInfo from './stockInfo.jsx';
import PurchaseOptions from './purchaseOptions.jsx';
import AddToList from './addToList.jsx';
import buttons from './buttonStyles.jsx';
import SocialMedia from './socialMediaBtns.jsx';
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
  border-top-color: #e7e7e7;
  margin-bottom: 14px;
`
const SmallLink = styled(buttons.StyledLink)`
  font-size: 12px;
`
const PrimeLogo = styled.div`
  background-image: url('https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIBaseCSS@variables-sprite_2x-13acd72bb22e0c502de00d0afe21c494871da686._V2_.png');
  height: 27px;
  width: 90px;
  background-position: -409px -493px;
  position: relative;
  background-repeat: no-repeat;
  margin: 4px 0 16px 0;
  zoom: 0.63;
`
const MapSymbol = styled(PrimeLogo)`
  background-image: url('https://m.media-amazon.com/images/G/01/AUIClients/DeliveryStaticPackard-pin_desktop_2x-180f59a1b475c745a0ed67623d406c57aa5d0392._V2_.png');
  background-position: center;
  width: 26px;
  height: 35px;
  background-position: center;
  zoom: 0.5;
  display: inline-block;
  margin: 0 10px 0 0;
  top: -34px;
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
      url: `http://localhost:3002/items/${window.location.href.split('/')[3]}`,
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
        <SocialMedia />
        <StyledBox>
          <Price>${(this.state.item.price/100).toFixed(2)}</Price>
          <PrimeLogo />
          <StockInfo stock={this.state.item.stock} name={this.state.item.name}/>
          <PurchaseOptions item={this.state.item} />
          <LineBreak />
          <SmallLink style={{fontSize: '11px'}}> Turn on 1-Click ordering for this browser</SmallLink>
          <LineBreak />
          <div>
            <MapSymbol />
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