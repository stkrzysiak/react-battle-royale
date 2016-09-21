import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import { MainMenuBase } from '../index';

describe('<MainMenu />', () => {
  it.skip('renders three <MainMenu /> component', () => {
    const wrapper = shallow(<MainMenuBase />);
    expect(wrapper.find(MainMenuBase)).to.have.length(1);
  });
});
