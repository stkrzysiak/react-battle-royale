/**
*
* A multi bar chart using c3
*
*/
/*
 * A simple nvd3 line chart
 */

import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-c3-component';
import 'c3/c3.css';

function getDatum(data) {
  const formattedSeries = [];
  const arrayLength = data.length;

  for (let i = 0; i < arrayLength; i += 1) {
    formattedSeries.push([`Series ${i}`]);
  }
  for (let i = 0; i < arrayLength; i += 1) {
    data[i].map((val) => formattedSeries[i].push(val.y));
  }

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
         grid: {
           y: {
             show: true,
           },
         },
       }}
     />
  );


MultiBarChartC3.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  colors: PropTypes.array,
  data: PropTypes.array,
};

export default MultiBarChartC3;
