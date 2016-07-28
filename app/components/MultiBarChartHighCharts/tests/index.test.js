import MultiBarChartHighCharts from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<MultiBarChartHighCharts />', () => {
  beforeEach(() => {
    const wrapper = shallow(<MultiBarChartHighCharts />);
    expect(wrapper).to.exist();
  });
});
