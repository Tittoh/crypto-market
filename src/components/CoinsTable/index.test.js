import React from 'react';
import ReactDOM from 'react-dom';
import CoinsTables from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render( < CoinsTables /> , div);
  ReactDOM.unmountComponentAtNode(div);
});