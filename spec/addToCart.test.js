import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PurchaseOptions from '../client/src/components/checkout/purchaseOptions.jsx';
Enzyme.configure({ adapter: new Adapter() });

describe('<PurchaseOptions />', () => {
  it('renders one <PurchaseOptions /> components', () => {
    const wrapper = shallow(<PurchaseOptions />);
    expect(wrapper.find('div')).toBeTruthy();
  });

  it('calls onClick event on click of AddToCart button', () => {
    const wrapper = mount(<PurchaseOptions />);
    const onClick = jest.fn();
    const AddToCart = wrapper.find('button.cart');
    AddToCart.first().simulate('click');
    expect(onClick).toBeCalled();
  });
});