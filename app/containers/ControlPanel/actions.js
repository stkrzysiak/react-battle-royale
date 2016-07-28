/*
 *
 * ControlPanel actions
 *
 */

import {
  ADJUST_HEIGHT,
  ADJUST_WIDTH,
  UPDATE_DATA_POINTS,
  UPDATE_SERIES_COUNT,
} from './constants';

export function adjustWidth(width) {
  return {
    type: ADJUST_WIDTH,
    width,
  };
}

export function adjustHeight(height) {
  return {
    type: ADJUST_HEIGHT,
    height,
  };
}

export function updateDataPoints(direction) {
  return {
    type: UPDATE_DATA_POINTS,
    direction,
  };
}

export function updateSeriesCount(direction) {
  return {
    type: UPDATE_SERIES_COUNT,
    direction,
  };
}
