/**
*
* MultiBarChartHighCharts
*
*/
import ReactHighcharts from 'react-highcharts';
import React from 'react';
import PropTypes from 'prop-types';

function getDatum(data) {
  const datum = [];
  const arrayLength = data.length;
  for (let i = 0; i < arrayLength; i += 1) {
    datum[i] = datum[i] || [];
    const tmp = [];
    data[i].map((val) => tmp.push(val.y));
    datum[i] = {
      name: `Series ${i}`,
      data: tmp,
    };
  }

  return datum;
}

function getAxisX(data) {
  const xAxis = [];
  data.pop().map((val) => xAxis.push(val.x));
  return xAxis;
}

const MultiBarChartHighCharts = ({ data, colors, width, height }) => {
  const formattedData = getDatum(data);
  const config = {
    xAxis: {
      categories: getAxisX(data.slice(0)),
    },
    series: formattedData,
    chart: {
      type: 'column',
      height,
      width,
    },
    colors,
  };
  return (
    <div>
      <ReactHighcharts config={config} />
    </div>
  );
};

MultiBarChartHighCharts.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  colors: PropTypes.array,
  data: PropTypes.array,
};

export default MultiBarChartHighCharts;
