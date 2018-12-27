import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/app.jsx';
// import Checkout from '../client/src/components.jsx';

function setup() {
  const props = {
    imgPath: 'some/image/path/to/a/mock/image',
  };
  const wrapper = shallow(<App />);
  return { wrapper, props };
}
describe('<App />', () => {
  it('renders', () => {
    const { wrapper } = setup();
    expect(wrapper.find('img').exists()).toBe(true);
  })
})
