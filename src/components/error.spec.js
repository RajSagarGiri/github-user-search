import React from 'react';
import Error from './error';
import { create } from 'react-test-renderer';

describe(`Error Page`, () => {
  it(`Renders as expected`, () => {
    const tree = create(<Error />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
