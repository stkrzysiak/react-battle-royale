/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import React from 'react';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';

import Footer from 'components/Footer';

import styles from './styles.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); // for the tabs

function App(props) {
  return (
    <MuiThemeProvider>
      <div className={styles.wrapper}>
        {props.children}
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
