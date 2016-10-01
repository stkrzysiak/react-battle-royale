/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MainMenu from 'components/MainMenu';

import styles from './styles.css';


injectTapEventPlugin(); // for the tabs

function App(props) {
  return (
    <MuiThemeProvider>
      <div className={styles.wrapper}>
        <Header />
        <MainMenu />
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
