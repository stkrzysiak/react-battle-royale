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
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MainMenu from 'components/MainMenu';


injectTapEventPlugin(); // for the tabs

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export function App(props) {
  return (
    <MuiThemeProvider>
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Chart Battle Royale"
          defaultTitle="Chart Battle Royale"
          meta={[
            { name: 'description', content: 'Quickly compare react components' },
          ]}
        />
        <Header />
        <MainMenu />
        {props.children}
        <Footer />
      </AppWrapper>
    </MuiThemeProvider>

  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
