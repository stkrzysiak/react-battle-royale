import { createSelector } from 'reselect';

/**
 * Direct selector to the ComponentsDemos state domain
 */
const selectComponentsDemosDomain = () => state => state.get('controlPanel');


/**
 * Other specific selectors
 */


/**
 * Default selector used by ControlPanel
 */

const selectComponentsDemos = () => createSelector(
  selectComponentsDemosDomain(),
  substate => substate.toJS()
);

export {
  selectComponentsDemos,
  selectComponentsDemosDomain,
};
