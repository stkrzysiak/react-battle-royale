import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { ChartsBase } from '../index';

describe('<Charts />', () => {
  it('should render itself', () => {
    const renderedComponent = shallow(<ChartsBase />);
    expect(renderedComponent.contains(ChartsBase)).toEqual(true);
  });
});
