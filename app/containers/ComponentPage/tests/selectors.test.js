import { fromJS } from 'immutable';
import expect from 'expect';
import { selectComponentsDemos } from '../selectors';


const selector = selectComponentsDemos();

describe('selectComponents', () => {
  it.skip('selector behaves as expected', () => {
    const subState = selector(fromJS({ controlPanel: { target: 2 }, meh: 1, bah: 2 }));
    expect(subState.target).to.equal(2);
  });
});
