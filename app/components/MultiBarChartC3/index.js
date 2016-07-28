/**
*
* A multi bar chart using c3
*
*/
/*
 * A simple nvd3 line chart
 */

import React from 'react';

import Chart from 'react-c3-component';
// import 'c3/c3.css';

function getDatum(data) {
  const formattedSeries = [];
  const arrayLength = data.length;

  for (let i = 0; i < arrayLength; i++) {
    formattedSeries.push([`Series ${i}`]);
  }
  for (let i = 0; i < arrayLength; i++) {
    data[i].map((val) => formattedSeries[i].push(val.y));
  }
  // debugger;
  // formattedSeries.push(['x']);
  // data[0].map((val) => {
  //   //debugger;
  //   formattedSeries[data.length].push(val.x);
  // });
  // console.log(JSON.stringify(formattedSeries));

  return formattedSeries;
}

function getXAxis(data) {
  const xCategories = [];
  data[0].map((val) => xCategories.push(val.x));
  return xCategories;
}


const MultiBarChartC3 = ({ data, colors, width, height }) =>
   (
  <Chart
    config={{
      data: {
        columns: getDatum(data),
        type: 'bar',
      },
      size: {
        width,
        height,
      },
      color: {
        pattern: colors,
      },
      axis: {
        x: {
          type: 'category',
          categories: getXAxis(data),
        },
      },
    }}
  />
  );


MultiBarChartC3.propTypes = {
  height: React.PropTypes.number,
  width: React.PropTypes.number,
  colors: React.PropTypes.array,
  data: React.PropTypes.array,
};

export default MultiBarChartC3;
