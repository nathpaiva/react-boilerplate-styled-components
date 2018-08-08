'use stict';

import React from 'react';
import renderer from 'react-test-renderer';

import Box from './';

describe('#Test Box Component', () => {
  it('#Should Box with success', () => {
    const tree = renderer.create(<Box title='Hello' text='First time using my test.' />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
