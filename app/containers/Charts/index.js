/*
 *
 * Charts
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import { COLORS } from './constants';

import MultiBarChartNvd3 from '../../components/MultiBarChartNvd3';
import MultiBarChartC3 from '../../components/MultiBarChartC3';
import MultiBarChartHighCharts from '../../components/MultiBarChartHighCharts';
import MultiBarChartVictory from '../../components/MultiBarChartVictory';
import ControlPanel from '../ControlPanel';

const colors = COLORS.adriftInDreams;

const tabStyles = {
  marginTop: '13px',
};

export class ChartsBase extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { width, height } = this.props.ui;
    const { data } = this.props;

    return (
      <div>
        <ControlPanel />
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
          <Tab label="Victory">
            <MultiBarChartVictory data={data} colors={colors} width={width} height={height} />
          </Tab>

        </Tabs>
      </div>
    );
  }
}

ChartsBase.propTypes = {
  ui: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  data: PropTypes.array,
};

export default connect()(ChartsBase);
