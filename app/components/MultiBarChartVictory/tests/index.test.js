import { shallow } from 'enzyme';
import React from 'react';
import MultiBarChartVictory from '../index';

describe('<MultiBarChartVictory />', () => {
  beforeEach(() => {
    const wrapper = shallow(<MultiBarChartVictory />);
    expect(wrapper).to.exist();
  });
});
