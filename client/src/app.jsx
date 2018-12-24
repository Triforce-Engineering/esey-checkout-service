import React from 'react';
import ReactDOM from 'react-dom';
import Checkout from './components/checkoutMain.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Checkout />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

module.exports = App;