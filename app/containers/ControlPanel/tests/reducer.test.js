import { fromJS } from 'immutable';

import expect from 'expect';
import controlPanelReducer from '../reducer';

describe('controlPanelReducer', () => {
  it('returns the initial state', () => {
    const EXPECTED = fromJS({ width: 600, height: 800, dataPoints: 12, seriesCount: 3 });
    expect(controlPanelReducer(undefined, {})).toEqual(EXPECTED);
  });
});
