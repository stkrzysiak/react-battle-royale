import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { ChartsBase } from '../index';
// import { Tabs, Tab } from 'material-ui/Tabs';

const props = { ui: { width: 123, height: 123 }, data: {} };
describe('<Charts />', () => {
  it('should render itself', () => {
    const renderedComponent = shallow(<ChartsBase ui={props.ui} />);
    expect(renderedComponent.contains(ChartsBase)).toEqual(true);
  });
});
