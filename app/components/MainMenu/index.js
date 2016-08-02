/**
*
* MainMenu
*
*/

import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';


export class MainMenu extends React.Component {
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
      <div>
        <Tabs>
          <Tab label="Home" onClick={this.openHomePage} />
          <Tab label="Components" onClick={this.openComponentsPage} />
          <Tab label="FAQs" onClick={this.openFaqsPage} />
        </Tabs>
      </div>
    );
  }
}

MainMenu.propTypes = {
  changeRoute: React.PropTypes.func,

};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    dispatch,
  };
}


// Wrap the component to inject dispatch and state into it
export default connect(null, mapDispatchToProps)(MainMenu);
