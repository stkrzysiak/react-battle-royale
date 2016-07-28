import expect from 'expect';
import controlPanelReducer from '../reducer';
import { fromJS } from 'immutable';

describe('controlPanelReducer', () => {
  it('returns the initial state', () => {
    const EXPECTED = fromJS({ width: 600, height: 800, dataPoints: 12, seriesCount: 3 });
    expect(controlPanelReducer(undefined, {})).toEqual(EXPECTED);
  });
});
