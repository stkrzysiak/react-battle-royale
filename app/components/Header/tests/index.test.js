import { shallow } from 'enzyme';
import React from 'react';
import expect from 'expect';
import Header from '../index';


describe('<Header />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Header)).to.have.length(1);
  });
});
