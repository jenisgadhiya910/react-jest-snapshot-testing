import React from 'react';
import renderer from 'react-test-renderer';
import List from './List';

describe('List', () => {

  it('matches snapshot when empty list', () => {
    const tree = renderer
      .create(<List/>);
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot when items passed in', () => {
    const items = ['abc', 'def', 'ghi'];
    const tree = renderer
      .create(<List items={items}/>);
    expect(tree).toMatchSnapshot();
  });

});