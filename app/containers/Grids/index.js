/*
 *
 * Grids
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';

export class Grids extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.grids}>
      This is Grids container !
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapDispatchToProps)(Grids);
