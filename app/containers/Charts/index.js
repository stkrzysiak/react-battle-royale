/*
 *
 * Charts
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import { COLORS } from './constants';
import styles from './styles.css';

import MultiBarChartNvd3 from '../../components/MultiBarChartNvd3';
import MultiBarChartC3 from '../../components/MultiBarChartC3';
import MultiBarChartHighCharts from '../../components/MultiBarChartHighCharts';

const colors = COLORS.adriftInDreams;

const tabStyles = {
  marginTop: '13px',
};

export class Charts extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { width, height } = this.props.ui;
    const { data } = this.props;

    return (
      <div className={styles.charts}>
        <Tabs style={tabStyles}>

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
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect()(Charts);
