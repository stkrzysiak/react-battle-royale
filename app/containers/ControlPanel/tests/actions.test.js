import expect from 'expect';
import {
  adjustWidth,
  adjustHeight,
  updateDataPoints,
  updateSeriesCount,
} from '../actions';
import {
  ADJUST_HEIGHT,
  ADJUST_WIDTH,
  UPDATE_DATA_POINTS,
  UPDATE_SERIES_COUNT,
} from '../constants';

const ARBITRARY_INTEGER = 123;
const ARBITRARY_DIRECTION = 'up';

describe('ControlPanel actions', () => {
  it('adjustWidth() has a type of ADJUST_WIDTH', () => {
    const expected = {
      type: ADJUST_WIDTH,
      width: ARBITRARY_INTEGER,
    };
    expect(adjustWidth(ARBITRARY_INTEGER)).toEqual(expected);
  });
  it('adjustHeight() has a type of ADJUST_HEIGHT', () => {
    const expected = {
      type: ADJUST_HEIGHT,
      height: ARBITRARY_INTEGER,
    };
    expect(adjustHeight(ARBITRARY_INTEGER)).toEqual(expected);
  });
  it('updateDataPoints() has a type of UPDATE_DATA_POINTS', () => {
    const expected = {
      type: UPDATE_DATA_POINTS,
      direction: ARBITRARY_DIRECTION,
    };
    expect(updateDataPoints(ARBITRARY_DIRECTION)).toEqual(expected);
  });
  it('updateSeriesCount() has a type of UPDATE_SERIES_COUNT', () => {
    const expected = {
      type: UPDATE_SERIES_COUNT,
      direction: ARBITRARY_DIRECTION,
    };
    expect(updateSeriesCount(ARBITRARY_DIRECTION)).toEqual(expected);
  });
});
