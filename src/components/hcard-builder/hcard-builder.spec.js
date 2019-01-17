import React from 'react';
import renderer from 'react-test-renderer';
import HCardBuilder from './hcard-builder';

describe('<hCardBuilder />', () => {
  it('renders the expected HTML', () => {
    const hCardBuilder = renderer
      .create(<HCardBuilder />)
      .toJSON();
    
    expect(hCardBuilder).toMatchSnapshot();
  });
});