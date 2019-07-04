import React from 'react';
import ReactDOM from 'react-dom';
import GetDoggy from './GetDoggy';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GetDoggy />, div);
  ReactDOM.unmountComponentAtNode(div);
});
