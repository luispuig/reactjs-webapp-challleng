import React from 'react';
import ReactDOM from 'react-dom';

import ShallowRenderer from 'react-test-renderer/shallow'; // ES6

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('match on Shallow mode', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
})
