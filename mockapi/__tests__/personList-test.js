import 'react-native';
import React from 'react';
import PersonList from '../src/container/PersonList';
import renderer from 'react-test-renderer';

test('PersonList snapShot', () => {
  const snap = renderer.create(<PersonList />).toJSON();
  expect(snap).toMatchSnapshot();
});
