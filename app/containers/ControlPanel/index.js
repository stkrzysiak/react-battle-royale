/*
 *
 * ControlPanel
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectControlPanel from './selectors';
import styles from './styles.css';
import Slider from 'material-ui/Slider';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

import { blue500 } from 'material-ui/styles/colors';

import {
  adjustWidth,
  adjustHeight,
  updateDataPoints,
  updateSeriesCount,
} from './actions';

export class ControlPanel extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { width, height, dataPoints, seriesCount } = this.props;
    return (
      <div id="controlPanel" className={styles.controlPanelWrapper}>
        <div className={styles.dataPointsWrapper} id="dataPointsWrapper">
          <ContentAdd
            color={blue500}
            onClick={() => this.props.onDataPointClick('up')}
          />
          <p className={styles.seriesCopy}>{dataPoints} data points </p>
          <ContentRemove
            color={blue500}
            onClick={() => this.props.onDataPointClick('down')}
          />
        </div>
        <div className={styles.seriesWrapper} id="seriesWrapper">
          <ContentAdd
            color={blue500}
            onClick={() => this.props.onSeriesClick('up')}
          />
          <p className={styles.seriesCopy}>{seriesCount} series </p>
          <ContentRemove
            color={blue500}
            onClick={() => this.props.onSeriesClick('down')}
          />
        </div>
        <div className={styles.sliderWrapper}>
          <Slider
            className={styles.slider}
            defaultValue={width}
            description={`Width: ${width}`}
            max={1200}
            min={200}
            name="width"
            onChange={this.props.onChangeWidth}
          />
          <Slider
            className={styles.slider}
            defaultValue={height}
            description={`Height: ${height}`}
            max={1200}
            min={200}
            name="height"
            onChange={this.props.onChangeHeight}
          />

        </div>
      </div>
    );
  }
}

const mapStateToProps = selectControlPanel();

function mapDispatchToProps(dispatch) {
  return {
    onChangeWidth: (evt, val) => dispatch(adjustWidth(val)),
    onChangeHeight: (evt, val) => dispatch(adjustHeight(val)),
    onDataPointClick: (direction) => dispatch(updateDataPoints(direction)),
    onSeriesClick: (direction) => dispatch(updateSeriesCount(direction)),
    dispatch,
  };
}


ControlPanel.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  dataPoints: React.PropTypes.number,
  seriesCount: React.PropTypes.number,
  onChangeWidth: React.PropTypes.func,
  onChangeHeight: React.PropTypes.func,
  onDataPointClick: React.PropTypes.func,
  onSeriesClick: React.PropTypes.func,

};
export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
