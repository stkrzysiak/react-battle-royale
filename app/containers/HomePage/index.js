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
import MultiBarChartNvd3 from '../../components/MultiBarChartNvd3';
import MultiBarChartC3 from '../../components/MultiBarChartC3';
import MultiBarChartHighCharts from '../../components/MultiBarChartHighCharts';
import randomDataSelector from './randomDataSelector';
import ControlPanel from '../ControlPanel';
import selectHomePage from './selector';
const colors = ['#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900'];


const HomePage = ({ ui, data }) => {
  const { width, height } = ui;
  return (
    <div className={styles.wrapper}>
      <ControlPanel />
      <Tabs>

        <Tab label="C3">
          <MultiBarChartC3 data={data} colors={colors} width={width} height={height} />
        </Tab>
        <Tab label="HighCharts">
          <MultiBarChartHighCharts data={data} colors={colors} width={width} height={height} />
        </Tab>
        <Tab label="NVD3">
          <MultiBarChartNvd3 data={data} colors={colors} width={width} height={height} />
        </Tab>

      </Tabs>
    </div>
  );
};


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
