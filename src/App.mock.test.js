import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import List from './List';

jest.mock('./List', () => () => (<list/>));

describe('App - Mocking', () => {

  it('matches snapshot with title', () => {
    const tree = renderer
      .create(<App title="Example Title"/>);
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot when no title', () => {
    const tree = renderer
      .create(<App/>);
    expect(tree).toMatchSnapshot();
  });

});