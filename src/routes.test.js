import React from 'react';
import { Route } from 'react-router';
import { shallow } from 'enzyme';
import Routes from './routes';
import Home from './containers/Home';

describe('<Router />', () => {
  it('renders correct routes', () => {
    const wrapper = shallow( < Routes /> );
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
    expect(pathMap['/']).toBe(Home);
  });
});