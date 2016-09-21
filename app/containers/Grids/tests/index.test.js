
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { GridsBase } from '../index';

describe('<Grids />', () => {
  it.skip('should render itself', () => {
    const renderedComponent = shallow(<GridsBase />);
    expect(renderedComponent.contains(GridsBase)).toEqual(true);
  });
});
