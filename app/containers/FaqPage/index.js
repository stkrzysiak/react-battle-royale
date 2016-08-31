/*
 *
 * FaqPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';

export class FaqPageBase extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.faqPage}>
      This is FaqPage container !
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapDispatchToProps)(FaqPageBase);
