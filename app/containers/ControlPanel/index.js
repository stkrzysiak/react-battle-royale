/*
 *
 * ControlPanel
 *
 */
import styled from 'styled-components';
import { blue500 } from 'material-ui/styles/colors';

import Slider from 'material-ui/Slider';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectControlPanel } from './selectors';

import {
  adjustWidth,
  adjustHeight,
  updateDataPoints,
  updateSeriesCount,
} from './actions';


const DataPointsWrapper = styled.div`
  padding: 0 10px;
  display: flex;
`;

const SliderWrapper = styled.div`
  margin: 5px 0;
  display: flex;
`;

const SeriesCopy = styled.p`
  margin: 0 10px;
`;

const ControlPanelWrapper = styled.div`
  display:flex;
`;

const SingleSlider = styled.div`
  margin: 0 50px;
  flex-grow: 1;
`;

export class ControlPanelBase extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { width, height, dataPoints, seriesCount } = this.props;
    return (
      <ControlPanelWrapper>
        <DataPointsWrapper>
          <ContentAdd
            color={blue500}
            onClick={() => this.props.onDataPointClick('up')}
          />
          <SeriesCopy>{dataPoints} data points </SeriesCopy>
          <ContentRemove
            color={blue500}
            onClick={() => this.props.onDataPointClick('down')}
          />
        </DataPointsWrapper>
        <DataPointsWrapper>
          <ContentAdd
            color={blue500}
            onClick={() => this.props.onSeriesClick('up')}
          />
          <SeriesCopy>{seriesCount} series </SeriesCopy>
          <ContentRemove
            color={blue500}
            onClick={() => this.props.onSeriesClick('down')}
          />
        </DataPointsWrapper>
        <SliderWrapper>
          <SingleSlider>
            <p>Width: width</p>
            <Slider
              defaultValue={width}
              max={1200}
              min={200}
              name="width"
              onChange={this.props.onChangeWidth}
            />
          </SingleSlider>
          <SingleSlider>
            <p>Height: {height}</p>
            <Slider
              defaultValue={height}
              max={1200}
              min={200}
              name="height"
              onChange={this.props.onChangeHeight}
            />
          </SingleSlider>
        </SliderWrapper>
      </ControlPanelWrapper>
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


ControlPanelBase.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  dataPoints: PropTypes.number,
  seriesCount: PropTypes.number,
  onChangeWidth: PropTypes.func,
  onChangeHeight: PropTypes.func,
  onDataPointClick: PropTypes.func,
  onSeriesClick: PropTypes.func,

};
export default connect(mapStateToProps, mapDispatchToProps)(ControlPanelBase);
