import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import MultiBarChartC3 from '../index';

describe('<MultiBarChartC3 />', () => {
  beforeEach(() => {
    const wrapper = shallow(<MultiBarChartC3 />);
    expect(wrapper).to.exist();
  });
});
