import React from 'react';
import ReactDOM from 'react-dom';
import Checkout from './components/checkout/checkoutMain.jsx';
import Recs from './components/recs/recsMain.jsx';

ReactDOM.render(<Checkout />, document.getElementById('checkout'));
ReactDOM.render(<Recs />, document.getElementById('recs'));
