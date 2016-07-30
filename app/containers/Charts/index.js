/*
 *
 * Charts
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';

export class Charts extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.charts}>
      This is Charts container !
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapDispatchToProps)(Charts);
