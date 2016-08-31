import { fromJS } from 'immutable';
import expect from 'expect';
import { selectComponents } from '../selectors';


const selector = selectComponents();

describe('selectComponents', () => {
  it('selector behaves as expected', () => {
    const subState = selector(fromJS({ controlPanel: { target: 2 }, meh: 1, bah: 2 }));
    expect(subState.target).to.equal(2);
  });
});
