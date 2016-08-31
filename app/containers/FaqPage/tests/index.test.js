import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { FaqPageBase } from '../index';

describe('<FaqPage />', () => {
  it('should render itself', () => {
    const renderedComponent = shallow(<FaqPageBase />);
    expect(renderedComponent.contains(FaqPageBase)).toEqual(true);
  });
});
