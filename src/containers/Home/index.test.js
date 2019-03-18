import React from 'react';
import { shallow } from 'enzyme';;
import Home from './index';

it('renders without crashing', () => {
  const wrapper = shallow( <Home />);
  expect(wrapper.find('.max-width').length).toEqual(0);
});