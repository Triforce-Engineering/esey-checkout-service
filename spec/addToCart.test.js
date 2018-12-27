import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddToCart from '../client/src/components/checkout/addToCart.jsx';
Enzyme.configure({ adapter: new Adapter() });

describe('<AddToCart />', () => {
  it('renders one <AddToCart /> component', () => {
    const wrapper = shallow(<AddToCart />);
    expect(wrapper.find('div')).toBeTruthy();
  });

  it('calls onClick event on click of AddToCart button', () => {
    const onClick = jest.fn();
    const wrapper = mount(<AddToCart onClick={onClick} />);
    wrapper.find(AddToCart).prop('onClick')();
    expect(onClick).toBeCalled();
  });
});