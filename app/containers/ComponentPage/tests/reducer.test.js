import expect from 'expect';
import componentsReducer from '../reducer';
import { fromJS } from 'immutable';

describe('componentsReducer', () => {
  it('returns the initial state', () => {
    expect(componentsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
