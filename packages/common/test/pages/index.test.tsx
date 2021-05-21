import React from 'react';
import App from '../../pages/index';
import { render } from '../testUtils';

describe('App', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<App />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
