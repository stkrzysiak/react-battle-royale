/*
 *
 * ControlPanel reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADJUST_HEIGHT,
  ADJUST_WIDTH,
  UPDATE_DATA_POINTS,
  UPDATE_SERIES_COUNT,
} from './constants';

const initialState = fromJS({ width: 600, height: 800, dataPoints: 12, seriesCount: 3 });
const updateIntegerProperty = (property, state, direction) => {
  let tmp = state.get(property);
  tmp = direction === 'up' ? ++tmp : --tmp;
  return state.set(property, tmp);
};

function controlPanelReducer(state = initialState, action) {
  switch (action.type) {
    case ADJUST_WIDTH:
      return state.set('width', action.width);
    case ADJUST_HEIGHT:
      return state.set('height', action.height);
    case UPDATE_DATA_POINTS: {
      return updateIntegerProperty('dataPoints', state, action.direction);
    }
    case UPDATE_SERIES_COUNT: {
      return updateIntegerProperty('seriesCount', state, action.direction);
    }
    default:
      return state;
  }
}

export default controlPanelReducer;
