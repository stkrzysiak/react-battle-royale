import ControlPanel from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<ControlPanel />', () => {
  beforeEach(() => {
    const wrapper = shallow(<ControlPanel />);
    expect(wrapper.find('#dataPointsWrapper')).to.have.length(3);
  });
});
