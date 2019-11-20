import React from 'react';
import Dashboard from './Dashboard';
import renderer from 'react-test-renderer';

test('Dashboard renders', () => {
  const component = renderer.create();
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should add 3 to 3 for 6', () => {
  expect(3 + 3).toEqual(6);
});
