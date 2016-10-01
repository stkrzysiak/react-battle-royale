/**
*
* MainMenu
*
*/

import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import ActionHelp from 'material-ui/svg-icons/action/help';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionViewQuilt from 'material-ui/svg-icons/action/view-quilt';
import styles from './styles.css';

export class MainMenuBase extends React.Component {
  /**
   * Changes the route
   *
   * @param  {string} route The route we want to go to
   */
  openRoute = (route) => {
    this.props.changeRoute(route);
  };

  /**
   * Changed route to '/components'
   */
  openComponentsPage = () => {
    this.openRoute('/components');
  };

  /**
   * Changed route to '/faqs'
   */
  openFaqsPage = () => {
    this.openRoute('/faqs');
  };
  /**
   * Changed route to '/'
   */
  openHomePage = () => {
    this.openRoute('/');
  };
  render() {
    return (
      <div className={styles.mainMenu}>
        <ActionHome onClick={this.openHomePage} />
        <ActionHelp onClick={this.openFaqsPage} />
        <ActionViewQuilt onClick={this.openComponentsPage} />
      </div>
    );
  }
}

MainMenuBase.propTypes = {
  changeRoute: React.PropTypes.func,

};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: url => dispatch(push(url)),
    dispatch,
  };
}


// Wrap the component to inject dispatch and state into it
export default connect(null, mapDispatchToProps)(MainMenuBase);
