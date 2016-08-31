import { fromJS } from 'immutable';
import expect from 'expect';
import componentsReducer from '../reducer';

describe('componentsReducer', () => {
  it('returns the initial state', () => {
    expect(componentsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
