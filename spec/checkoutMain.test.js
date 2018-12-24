import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Checkout from '../client/src/components/checkoutMain.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<Checkout />', () => {
  it('renders one <Checkout /> components', () => {
    const wrapper = shallow(<Checkout />);
    expect(wrapper.find('div')).toBeTruthy();
  });
});