import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import { ComponentBase } from '../index';

describe('<ComponentPage />', () => {
  it('should render itself', () => {
    const renderedComponent = shallow(<ComponentBase />);
    expect(renderedComponent.contains(ComponentBase)).toEqual(true);
  });
});
