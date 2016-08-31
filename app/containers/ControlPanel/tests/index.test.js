import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { ControlPanelBase } from '../index';

describe('<ControlPanel />', () => {
  beforeEach(() => {
    const wrapper = shallow(<ControlPanelBase />);
    expect(wrapper.find('#dataPointsWrapper')).to.have.length(3);
  });
});
