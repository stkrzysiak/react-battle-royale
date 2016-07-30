/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */
import styles from './styles.css';

import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';

import randomDataSelector from './randomDataSelector';
import ControlPanel from '../ControlPanel';
import Charts from '../Charts';

import selectHomePage from './selector';

const HomePage = ({ ui, data }) => (
  <div className={styles.wrapper}>
    <div className={styles.logo}>React. Battle. Royale.</div>
    <Tabs>
      <Tab label="Charts" />
      <Tab label="Grids" />
    </Tabs>
    <ControlPanel />
    <Charts ui={ui} data={data} />
  </div>
);


const mapStateToProps = createStructuredSelector({
  data: randomDataSelector(),
  ui: selectHomePage(),
});

HomePage.propTypes = {
  ui: React.PropTypes.shape({
    width: React.PropTypes.number,
    height: React.PropTypes.number,
  }),
  data: React.PropTypes.array,
};

export default connect(mapStateToProps)(HomePage);
