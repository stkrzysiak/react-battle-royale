import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import Footer from '../index';

describe('<Footer />', () => {
  it('should render the copyright notice', () => {
    const renderedComponent = shallow(
      <Footer />
    );
    expect(renderedComponent.contains(
      <section>
        <p>Figure out which charting library works best for you.</p>
      </section>
    )).toEqual(true);
  });

  it('should render the credits', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.contains(
      <section>
        <p>Created by Steve Krzysiak</p>
      </section>
    )).toEqual(true);
  });
});
