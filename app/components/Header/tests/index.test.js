import { shallow } from 'enzyme';
import React from 'react';
import expect from 'expect';
import Header from '../index';


describe('<Header />', () => {
  it('renders iself', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.hasClass('header')).toEqual(true);
  });
});
