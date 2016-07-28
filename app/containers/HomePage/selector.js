import { createSelector } from 'reselect';

/**
 * Direct selector to the homePage state domain
 */
const selectHomePageDomain = () => state => state.get('controlPanel');


/**
 * Other specific selectors
 */


/**
 * Default selector used by ControlPanel
 */

const selectHomePage = () => createSelector(
  selectHomePageDomain(),
  (substate) => substate.toJS()
);

export default selectHomePage;
export {
  selectHomePageDomain,
};
