import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import MultiBarChartHighCharts from '../index';

describe('<MultiBarChartHighCharts />', () => {
  beforeEach(() => {
    const wrapper = shallow(<MultiBarChartHighCharts />);
    expect(wrapper).to.exist();
  });
});
