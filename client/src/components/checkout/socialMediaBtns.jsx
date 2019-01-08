import React from 'react';
import styled from 'styled-components';
import buttons from './buttonStyles.jsx';

const Email = styled.div`
  display: inline-block;
  margin-right: 5px;
  background-image: url(https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIBaseCSS-sprite_2x-13acd72bb22e0c502de00d0afe21c494871da686._V2_.png);
  width: 50px;
  height: 50px;
  background-position: -191px -319px;
  zoom: 0.5;
  position: relative;
`
const Facebook = styled(Email)`
  width: 42px;
  height: 38px;
  background-position: -66px -332px;
`
const Twitter = styled(Email)`
  width: 44px;
  height: 34px;
  background-position: -106px -335px;
`
const Pinterest = styled(Email)`
  width: 40px;
  height: 50px;
  background-position: -151px -321px;
`

const SocialMedia = function() {
  return (
    <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '5px'}}>
      <buttons.StyledLink style={{marginRight: '5px'}}>Share</buttons.StyledLink>
      <Email />
      <Facebook />
      <Twitter />
      <Pinterest />
    </div>
  )
}

export default SocialMedia;